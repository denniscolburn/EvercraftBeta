package steps;

import lib.PC;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.junit.Assert.*;

public class EvercraftSteps {
	
	protected PC pc = null;
	protected String pcName;
	
	@Given("^I have a character$")
	public void i_have_a_character() throws Throwable {
	    pc = new PC();
	}

	@When("^I ask him his name$")
	public void i_ask_him_his_name() throws Throwable {
	    pcName = pc.getName();
	}

	@Then("^he replies \"([^\"]*)\"$")
	public void he_replies(String name) throws Throwable {
	    assertEquals(name, pc.getName());
	}	
	
	@When("^I tell him his name is \"([^\"]*)\"$")
	public void i_tell_him_his_name_is(String name) throws Throwable {
		pc.setName(name);
	    
	}

}
