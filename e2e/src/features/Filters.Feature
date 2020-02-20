 Feature: Login to Eops then choose LSSI Data Compare application and perform basic operations
 @Regression @CreateDelay @DistrictLevelAccess @LocationLevel @WithoutRolldownLocations
Scenario Outline: Login to Eops then choose LSSI Data Compare application and perform basic operations
 
   Given Login to the Eops with "<Username>" and "<Password>" and Select the LSSI Data Compare Application
  #  When Enter Location Code "<Location_Code>" and Click on Go button and it should navigate to Service Delay Queue Page
  #  And Click on Show Filter and enter the Location ID "<Location_ID>" to be edited
  #  And verify that only applied "<Location_ID>" is displayed
   
   Examples:
#   | Username | Password | 
#   | 5144561  | 5144561  | 
  | Username | Password | 
  | 3797361  | 3797361  | 

Scenario Outline: Create New Report Functionality under LSSI Data Compare Application
 
   Given Login to the LSSI Data Compare Application with "<Username>" and "<Password>" and test Create New Report
   
   Examples:
  | Username | Password | 
  | 3797361  | 3797361  | 

  Scenario Outline: Export To Excel Functionality under LSSI Data Compare Application
 
   Given Test Export to Excel functionality

Scenario Outline: View report Functionality under LSSI Data Compare Application
 
   Given Test View Report functionality