@zoro_login
Feature: Zoro Login

  Background:
    Given I am on Zoro Login Page

  Scenario: User can successfully login from Login Page
    When I enter a valid login detail
    Then I can see user is successfully logged in

  Scenario: User get error message for invalid login
    When I enter an invalid login detail
    Then I can see invalid login message "Invalid email address or password"

  Scenario: User see error message for entering email in wrong format
    When I enter email in wrong format
    Then I can see invalid email message "Please enter a valid email address"

  Scenario: User see error message when email is not entered
    When I enter detail without email
    Then I can see email required message "Email is required"

  Scenario: User see error message when password is not entered
    When I enter detail without password
    Then I can see password required message "Password is required"

  Scenario: User is taken to forgot password page after clicking forgot password link
    When I click forgot password link
    Then I am on forgot password page


