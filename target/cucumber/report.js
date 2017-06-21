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
  "duration": 103232925,
  "status": "passed"
});
formatter.match({
  "location": "EvercraftSteps.i_ask_him_his_name()"
});
formatter.result({
  "duration": 40401,
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
  "duration": 5039196,
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
  "duration": 37381,
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
  "duration": 88354,
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
  "duration": 95151,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "My character has an alignment",
  "description": "",
  "id": "character;my-character-has-an-alignment",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I have a character",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I ask him his alignment",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "he replies \"Neutral\" is his alignment",
  "keyword": "Then "
});
formatter.match({
  "location": "EvercraftSteps.i_have_a_character()"
});
formatter.result({
  "duration": 36248,
  "status": "passed"
});
formatter.match({
  "location": "EvercraftSteps.i_ask_him_his_alignment()"
});
formatter.result({
  "duration": 36625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Neutral",
      "offset": 12
    }
  ],
  "location": "EvercraftSteps.he_replies_is_his_alignment(String)"
});
formatter.result({
  "duration": 116673,
  "status": "passed"
});
});