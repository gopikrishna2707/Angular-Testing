import { CalculatorService } from "./calculator.service"
import { LoggerService } from "./logger.service";
import { TestBed } from "@angular/core/testing"

describe("calculatorService",() => {
     let logger:jasmine.SpyObj<LoggerService>
     let calservice:CalculatorService

    beforeEach(()=> {
         logger = jasmine.createSpyObj("LoggerService",["log"])
//calservice = new CalculatorService(logger);
       TestBed.configureTestingModule({
        providers: [
            CalculatorService,{
                provide:LoggerService,useValue:logger
            }
        ]
       })

       calservice = TestBed.inject(CalculatorService);
        
    })


    it("should add two number", () => {
       const result = calservice.add(2,3);
       expect(result).toBe(5);
    })

    it("should multiply two number", () => {
        const result = calservice.multiply(2,3);
       expect(result).toBe(6);
    })
})