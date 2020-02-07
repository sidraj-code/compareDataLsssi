 Feature: Create Functionality Of Delay Request For District Level Without Rolldown Locations
 @Regression @CreateDelay @DistrictLevelAccess @LocationLevel @WithoutRolldownLocations
Scenario Outline: 647834 - Verify The Create Functionality Of Delay Request For District Level Without Rolldown Locations --- Selecting 'Location' as Location Level
 
   Given Login to the Eops with "<Username>" and "<Password>" and Select the Service Delay Application
  #  When Enter Location Code "<Location_Code>" and Click on Go button and it should navigate to Service Delay Queue Page
  #  And Click on Show Filter and enter the Location ID "<Location_ID>" to be edited
  #  And verify that only applied "<Location_ID>" is displayed
   
   Examples:
 | Username | Password | Location_Code | Location_ID |
  |5175430  | 5175430  | RPEWK         | INTCU |