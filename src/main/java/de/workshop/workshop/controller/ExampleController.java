package de.workshop.workshop.controller;

import lombok.Data;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class ExampleController {

    @RequestMapping(path = "test", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    //um zu sehen wie man mediatypes ändert
    public TestEntity getTestEntity() {
        TestEntity testEntity = new TestEntity();
        testEntity.setTest1("hello");
        testEntity.setTest2("world");

        return testEntity;
    }

    @RequestMapping(path = "add", method = RequestMethod.GET)
    public String testQueryParam(@RequestParam(value = "number1", defaultValue = "0") int number1, @RequestParam(value = "number2", defaultValue = "0") int number2) {
        return "result: " + (number1 + number2);
    }

    @RequestMapping(path = "hello/{name}", method = RequestMethod.GET)
    public String testPathParam(@PathVariable(name = "name") String name) {
        return "hello " + name;
    }

    @RequestMapping(path = "post", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public String testPost(@RequestBody String simpleBody) {
        return null;
    }
}

@Data
class TestEntity {
    private String test1;
    private String test2;
}
