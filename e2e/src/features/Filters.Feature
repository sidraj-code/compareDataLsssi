 Feature: Login to Eops then choose LSSI Data Compare application and perform basic operations
 @Regression @CreateDelay @DistrictLevelAccess @LocationLevel @WithoutRolldownLocations
Scenario Outline: Login to Eops then choose LSSI Data Compare application and perform basic operations
 
   Given Login to the Eops with "<Username>" and "<Password>" and Select the LSSI Data Compare Application
   When Login to the LSSI Data Compare Application with "<Username>" and "<Password>" and test Create New Report
   And Test Export to Excel functionality
   And Test View Report functionality
   # And Login to the Eops with invalid credentials "<InvalidUser>" and "<InvalidPwd>"
  
   
   Examples:
  | Username | Password | InvalidUser | InvalidPwd | 
  | 3894779  | 3894779  | 5144561  | 5144561  | 
  
   

