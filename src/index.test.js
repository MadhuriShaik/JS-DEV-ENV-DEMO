import {expect} from 'chai';
import jsdom from 'jsdom';

describe('first test', () => {
    it('should pass', ()=> {
        expect(true).to.equals(true);
    });
});

const {JSDOM} = jsdom;
describe('index.html', ()=>{
    it('should say hello', (done) => {
        const options = {}
        JSDOM.fromFile('./src/index.html', options).then(dom => {
            const h1 = dom.window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equals("Hello World?");
            done();
        }).catch(done)
    })
})