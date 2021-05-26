import {EGender} from "../enums/EGender";
export class Deputy {
    name: string;
    age: number;
    gender: EGender;
    honesty:number;
    sumBribe:number;
    bribe:boolean;
    constructor(age: number,gender: EGender,name: string,honesty:number,sumBribe:number) {
        this.age=age;
        this.gender=gender;
        this.name=name;

        if (honesty<0){
            this.honesty=0
        }if (honesty>=100){
            this.honesty=100
        }if (honesty>=0 && honesty<=100){
            this.honesty=honesty
        }
        (honesty < 50) ? this.bribe = true : this.bribe = false;
        (sumBribe > 0) ? this.sumBribe = sumBribe : this.sumBribe = 0;
    }
    takeBribe(sum: number): string {
        let checkDeputyOnHonesty: string = 'Deputy is honesty';
        if (this.bribe) {
            if (this.sumBribe > sum) {
                checkDeputyOnHonesty = 'Never take a bribe';
            }
            if (sum > this.sumBribe && sum < this.sumBribe * (1 + (this.honesty / 100))) {
                checkDeputyOnHonesty = 'I have to think about this....';
            }
            if (sum > this.sumBribe * 1.1) {
                checkDeputyOnHonesty = 'I will take the bribe!'
            }
        }
        return checkDeputyOnHonesty;
    }

}