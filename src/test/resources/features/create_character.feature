Feature: Character

Scenario: My character has a name
Given I have a character
When I ask him his name
Then he replies "Bob"

Scenario: I can tell him his name
Given I have a character
When I tell him his name is "Jim"
Then he replies "Jim"


Scenario: My character has an alignment
Given I have a character 
When I ask him his alignment
Then he replies "Neutral" is his alignment

Scenario: My character has a armor class
Given I have a character
When I ask him his armor class
Then he replies "10" is my armor class


