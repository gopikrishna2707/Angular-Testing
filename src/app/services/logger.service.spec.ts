import { LoggerService } from './logger.service';


describe("LoggerService", () => {
       
         let logger:LoggerService;

         
    it("should display message", () =>{
        spyOn(console, "log")
        const message = "Angular unit testing";

         logger = new LoggerService();
        logger.log(message); //assertion

        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith(`LOGGER LOG:${message}`)
    })

 



})