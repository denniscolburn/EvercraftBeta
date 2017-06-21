Feature: Character

Scenario: My character has a name
Given I have a character
When I ask him his name
Then he replies "Bob"

Scenario: I can tell him his name
Given I have a character
When I tell him his name is "Jim"
Then he replies "Jim"

