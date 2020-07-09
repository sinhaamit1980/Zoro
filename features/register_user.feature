@in-progress
Feature: Register User


  Scenario: User register page is displayed as per design
    Given I am on the register page
    Then I can see register page as per design

  Scenario: Entering email in wrong format displays error
    Given I am on the register page
    When I enter valid user detail
    Then my account is created
    And I am taken to shop page

  Scenario: Title field is pre-populated with default value
    Given I am on the register page
    Then I can Title field is selected with default value 'Mr'

  Scenario: Create Account button is disabled until all mandatory filed is provided
    Given I am on the register page
    And I have not provided details for mandatory filed
    Then 'Create New Account' button is disabled

  Scenario: Create Account button is enabled when all mandatory filed is provided
    Given I am on the register page
    And I have provided details for mandatory filed
    Then 'Create New Account' button is enabled

  Scenario: Entering non numeric data in Telephone filed displays error
    Given I am on the register page
    When I enter non numeric data in Telephone filed
    Then I can see message 'Please enter a valid UK phone number'

  Scenario: Entering email in wrong format displays error
    Given I am on the register page
    When I enter email in wrong format
    Then I can see message 'Please enter a valid email address'

  Scenario: Entering password less than 7 characters displays an error
    Given I am on the register page
    When I enter password less than 7 characters
    Then I can see message 'Password needs to be at least 7 characters long'

  Scenario: Entering different confirm password displays an error
    Given I am on the register page
    And I enter a valid password
    When I enter a different confirm password
    Then I can see message 'Your two passwords do not match, please correct'

  Scenario Outline: Removing any mandatory field disable the Create Account button and displays error message
    Given I am on the register page
    And I enter a valid user data for all mandatory field
    When I remove "<field_name>" field
    Then I can see message "<error_message>"
    And 'Create New Account' button is disabled

    Examples:
      | field_name       | error_message                |
      | first name       | First Name is required       |
      | last name        | Last Name is required        |
      | telephone number | Email is required            |
      | password         | Password is required         |
      | confirm password | Confirm Password is required |

  Scenario: Promotion subscription option is by default checked
    Given I am on the register page
    Then promotion subscription option is checked by default