$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/create_character.feature");
formatter.feature({
  "line": 1,
  "name": "Character",
  "description": "",
  "id": "character",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "My character has a name",
  "description": "",
  "id": "character;my-character-has-a-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I have a character",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I ask him his name",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "he replies \"Bob\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EvercraftSteps.i_have_a_character()"
});
formatter.result({
  "duration": 106745184,
  "status": "passed"
});
formatter.match({
  "location": "EvercraftSteps.i_ask_him_his_name()"
});
formatter.result({
  "duration": 37380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bob",
      "offset": 12
    }
  ],
  "location": "EvercraftSteps.he_replies(String)"
});
formatter.result({
  "duration": 5189852,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Bob]\u003e but was:\u003c[Jim]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat steps.EvercraftSteps.he_replies(EvercraftSteps.java:28)\r\n\tat ✽.Then he replies \"Bob\"(features/create_character.feature:6)\r\n",
  "status": "failed"
});
});