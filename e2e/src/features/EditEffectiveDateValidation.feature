@EditEffectiveDate
Feature: Edit Effective Date

Scenario Outline: Edit the field "Effective Date" for Delay

Given Login to the Eops with "<Username>" and "<Password>" and Select the Service Delay Application
When Enter Location Code "<Location_Code>" and Click on Go button and it should navigate to Service Delay Queue Page
And Click on Show Filter and enter the Location ID "<Location_ID>" to be edited
And Click on Edit button
And Change the Effective Date "<Effective_Date_Change>"
And Click on Update button
Then Click on View button and verify the Effective Data "<Effective_Date_Change>"

Examples:
| Username | Password | Location_Code | Location_ID | Effective_Date_Change|
| 3810317  | 3810317  | PHLR          | PHLR        | 01/09/2020           |

        