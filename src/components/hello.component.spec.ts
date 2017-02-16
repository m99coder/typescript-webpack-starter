import {IHelloService} from '../interfaces/hello.service';
import {HelloComponent} from './hello.component';

class MockHelloService implements IHelloService {

    public sayHello(): string {
        return 'Hello, Jasmine!';
    }

}

describe('HelloComponent', () => {

    it('should say "Hello, Jasmine!"', () => {

        let mockHelloService = new MockHelloService();
        let helloComponent = new HelloComponent(mockHelloService);

        expect(helloComponent.sayHello()).toEqual('Hello, Jasmine!');

    });

});
