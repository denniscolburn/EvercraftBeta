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
	protected String pcAlign;
	protected String pcArmor;
	
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

	
	@When("^I ask him his alignment$")
	public void i_ask_him_his_alignment() throws Throwable {
	   pcAlign = pc.getAlign();
	}
	
	@Then("^he replies \"([^\"]*)\" is his alignment$")
	public void he_replies_is_his_alignment(String align) throws Throwable {
	    assertEquals(align, pc.getAlign());
	}
	
	@Then("^he replies \"([^\"]*)\" is my armor class$")
	public void he_replies_is_my_armor_class(String armor) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		assertEquals(armor, pc.getArmor());
	}
	
	@When("^I ask him his armor class$")
	public void i_ask_him_his_armor_class() throws Throwable {
		pcArmor = pc.getArmor();
	}
}
