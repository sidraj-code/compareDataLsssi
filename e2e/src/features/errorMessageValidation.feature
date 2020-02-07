
Feature: Error Messages Validation while creating Delay ----- Delay Application      
      
   
   Scenario Outline: Error Messages Validation while creating Delay

      Given Login to the Eops with "<Username>" and "<Password>" and Select the Service Delay Application 
      When Enter Location Code "<Location_Code>" and Click on Go button and it should navigate to Service Delay Queue Page
      And Click on Create New Delay
      And Click on Submit Button
      Then Verify the error messages 



      
    Examples:
    | Username | Password | Location_Code | Location_Level | Location_ID | Include_RollDown_Location | Delay_Type  | Cause_Of_Delay1 | Cause_Of_Delay2 | Cause_Of_Delay3 | Flight_Or_Truck | Delay_Time |               Comments            | Website_Link  | Emp_ID  |   Emp_Name    | EST_AA_DELV | EST_AM_DELV | EST_PM_DELV | ETA_on_road | HAL_ODA_available | Same_Day_Reattempts | Courier_Contact | PU_Affected | Contact_Details |
    | 3810317  | 3810317  |     PHLR      |      Ramp      |    PHLR     |            Yes            |   Inbound   |    WEATHER      |  MECHANICAL     |                 |      FLIGHT     |    1111    | Creating the Delay for Ramp Level | www.fedex.com | 3806310 | Pushpalatha J |    1815     |    1614     |     1514    |    1814     |       1519        |         YES         |       YES        |     YES     |    3806317      |                                                                   
