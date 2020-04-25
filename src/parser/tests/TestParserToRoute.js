import ParserJsonLdToRoute from '../ParserJsonLdToRoute';
import {Route, RouteElement} from '../../entities';
import {input1, input2} from "./routes";

describe.only("Parser to route", () => {
  
    const points=[[43.3551061,-5.8512792],[43.3547082,-5.8507937],[43.3545444,-5.8494473],[43.3546653,-5.8490288],[43.354872,-5.8487445]];
    let elements=[]
    for(let i=0;i<points.length;i++){
        let element=new RouteElement(points[i][0],points[i][1]);
        elements.push(element);
    }
    const output=new Route("test","The test route",elements, [], [], new Date());
  
    const route1=input1;
    const route2=input2;

    test("JsonLD route 1", () => {
      var viadeRoute1 = ParserJsonLdToRoute.parse(route1);
      expect(viadeRoute1).toEqual(output);
    });

    test("Turtle route 2", () => {
      var viadeRoute2 = ParserJsonLdToRoute.parseFromTurtle(route2);
      expect(viadeRoute2).toEqual(output);
    });

  });