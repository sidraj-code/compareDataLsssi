 
Feature: Create Functionality Of Delay Request For District Level Without Rolldown Locations
 @Regression @CreateDelay @DistrictLevelAccess @LocationLevel @WithoutRolldownLocations
Scenario Outline: 647834 - Verify The Create Functionality Of Delay Request For District Level Without Rolldown Locations --- Selecting 'Location' as Location Level
 
   Given Login to the Eops with "<Username>" and "<Password>" and Select the Service Delay Application
   When Enter Location Code "<Location_Code>" and Click on Go button and it should navigate to Service Delay Queue Page
   And Click on Create New Delay
   And Verify Values displayed in dropdown location Level

 Examples:
 | Username | Password | Location_Code | 
  |5175430  | 5175430  | RPEWK         |