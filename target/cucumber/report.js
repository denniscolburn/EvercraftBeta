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
  "duration": 108304593,
  "status": "passed"
});
formatter.match({
  "location": "EvercraftSteps.i_ask_him_his_name()"
});
formatter.result({
  "duration": 41912,
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
  "duration": 3276271,
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
  "duration": 40779,
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
  "duration": 82313,
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
  "duration": 89865,
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
  "duration": 39268,
  "status": "passed"
});
formatter.match({
  "location": "EvercraftSteps.i_ask_him_his_alignment()"
});
formatter.result({
  "duration": 55882,
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
  "duration": 79292,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "My character has a armor class",
  "description": "",
  "id": "character;my-character-has-a-armor-class",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I have a character",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I ask him his armor class",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "he replies \"10\" is my armor class",
  "keyword": "Then "
});
formatter.match({
  "location": "EvercraftSteps.i_have_a_character()"
});
formatter.result({
  "duration": 43799,
  "status": "passed"
});
formatter.match({
  "location": "EvercraftSteps.i_ask_him_his_armor_class()"
});
formatter.result({
  "duration": 49085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "EvercraftSteps.he_replies_is_my_armor_class(String)"
});
formatter.result({
  "duration": 90242,
  "status": "passed"
});
});