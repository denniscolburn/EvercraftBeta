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
  "duration": 112503672,
  "status": "passed"
});
formatter.match({
  "location": "EvercraftSteps.i_ask_him_his_name()"
});
formatter.result({
  "duration": 31717,
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
  "duration": 4673698,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "I can tell him his name",
  "description": "",
  "id": "character;i-can-tell-him-his-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I have a character",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I tell him his name is \"Jim\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "he replies \"Jim\"",
  "keyword": "Then "
});
formatter.match({
  "location": "EvercraftSteps.i_have_a_character()"
});
formatter.result({
  "duration": 40402,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jim",
      "offset": 24
    }
  ],
  "location": "EvercraftSteps.i_tell_him_his_name_is(String)"
});
formatter.result({
  "duration": 86088,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jim",
      "offset": 12
    }
  ],
  "location": "EvercraftSteps.he_replies(String)"
});
formatter.result({
  "duration": 186902,
  "status": "passed"
});
});