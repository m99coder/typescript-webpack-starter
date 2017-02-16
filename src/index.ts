import * as d3 from 'd3';

import {HelloComponent} from './components/hello.component';
import {IHelloService} from './interfaces/hello.service';

class MyHelloService implements IHelloService {

    public sayHello(): string {
        return 'Hello, World in ' + d3.color('#ff8e25');
    }

}

let myService = new MyHelloService();
let myComponent = new HelloComponent(myService);

console.info(myComponent.sayHello());
