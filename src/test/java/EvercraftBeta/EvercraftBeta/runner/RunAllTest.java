package EvercraftBeta.EvercraftBeta.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		monochrome = true,
		plugin = { "pretty", "html:target/cucumber" },
		features = "classpath:features",
		glue = "steps"		
		)
public class RunAllTest {

}
