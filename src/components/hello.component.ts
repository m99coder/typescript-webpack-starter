import {IHelloService} from '../interfaces/hello.service';

export class HelloComponent {

    constructor(
        private helloService: IHelloService
    ) {

    }

    public sayHello(): string {
        return this.helloService.sayHello();
    }

}
