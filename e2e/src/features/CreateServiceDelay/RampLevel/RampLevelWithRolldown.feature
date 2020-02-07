@RegionLevel @CreateDelayRampLevel
Feature: Create Functionality Of Delay Request For Ramp Level With Rolldown Locations

  @Regression @CreateDelay @RegionLevelAccess @LocationLevel @WithRolldownLocations
  Scenario Outline: 647834 - Verify The Create Functionality Of Delay Request For Ramp Level With Rolldown Locations --- Selecting 'Location' as Location Level

    Given Login to the Eops with "<Username>" and "<Password>" and Select the Service Delay Application
    When Enter Location Code "<Location_Code>" and Click on Go button and it should navigate to Service Delay Queue Page
    And Click on Create New Delay
    And Select Location Level "<Location_Level>" and Enter the Location ID "<Location_ID>"
    And Check the Rolldown Location Checkbox "<Include_RollDown_Location>" if yes to include Rolldown Location
    And Select the Delay Type "<Delay_Type>"
    And Select the Flight or Truck "<Flight_Or_Truck>" and Enter the Delay Time "<Delay_Time>"
    And Select the Cause of delay "<Cause_Of_Delay1>", "<Cause_Of_Delay2>" and "<Cause_Of_Delay3>"
    And Enter the Comments "<Comments>"
    # And Add the Website Link "<Website_Link>"
    And Enter the Other Details of EST AA DELV "<EST_AA_DELV>" , EST AM DELV "<EST_AM_DELV>" , EST PM DELV "<EST_PM_DELV>" , ETA on road "<ETA_on_road>" and HAL ODA available "<HAL_ODA_available>"
    And Select Same Day Reattempts as Yes or No "<Same_Day_Reattempts>"
    And Select Courier Contact as Yes or No "<Courier_Contact>"
    And Select PU's Affected as Yes or No "<PU_Affected>"
    And Enter the Emp ID "<Emp_ID>" and Verify the added Employee Name "<Emp_Name>" and Employee ID in the Contact Details
    And Click on Submit Button and It should navigate to the Queue page with the Requests created
    # Then Logout from the Delay Application

    Examples:
      | Username | Password | Location_Code | Location_Level | Location_ID | Include_RollDown_Location | Delay_Type | Cause_Of_Delay1 | Cause_Of_Delay2 | Cause_Of_Delay3 | Flight_Or_Truck | Delay_Time | Comments                           | Website_Link  | Emp_ID  | Emp_Name      | EST_AA_DELV | EST_AM_DELV | EST_PM_DELV | ETA_on_road | HAL_ODA_available | Same_Day_Reattempts | Courier_Contact | PU_Affected |
      | 3810317  | 3810317  | PHLR          |  Location      | ACYA        | YES                        | Both       |   WEATHER       | MECHANICAL      |                 | TRUCK           | 1111       | Pushpa:RAMP:ACYA:Y:1:9:2020:11:43 | www.fedex.com | 3806310 | Pushpalatha J | 1815        | 1614        | 1514        | 1814        | 1519              | YES                 | YES             | NO          |

      
  @Regression @CreateDelay @RampLevelAccess @RampLevel @WithRolldownLocations
  Scenario Outline: 647834 - Verify The Create Functionality Of Delay Request For Ramp Level With Rolldown Locations --- Selecting 'Ramp' as Location Level

    Given Login to the Eops with "<Username>" and "<Password>" and Select the Service Delay Application
    When Enter Location Code "<Location_Code>" and Click on Go button and it should navigate to Service Delay Queue Page
    And Click on Create New Delay
    And Select Location Level "<Location_Level>" and Enter the Location ID "<Location_ID>"
    And Check the Rolldown Location Checkbox "<Include_RollDown_Location>" if yes to include Rolldown Location
    And Select the Delay Type "<Delay_Type>"
    And Select the Flight or Truck "<Flight_Or_Truck>" and Enter the Delay Time "<Delay_Time>"
    And Select the Cause of delay "<Cause_Of_Delay1>", "<Cause_Of_Delay2>" and "<Cause_Of_Delay3>"
    And Enter the Comments "<Comments>"
    # And Add the Website Link "<Website_Link>"
    And Enter the Other Details of EST AA DELV "<EST_AA_DELV>" , EST AM DELV "<EST_AM_DELV>" , EST PM DELV "<EST_PM_DELV>" , ETA on road "<ETA_on_road>" and HAL ODA available "<HAL_ODA_available>"
    And Select Same Day Reattempts as Yes or No "<Same_Day_Reattempts>"
    And Select Courier Contact as Yes or No "<Courier_Contact>"
    And Select PU's Affected as Yes or No "<PU_Affected>"
    And Enter the Emp ID "<Emp_ID>" and Verify the added Employee Name "<Emp_Name>" and Employee ID in the Contact Details
    And Click on Submit Button and It should navigate to the Queue page with the Requests created
    # Then Logout from the Delay Application

    Examples:
      | Username | Password | Location_Code | Location_Level | Location_ID | Include_RollDown_Location | Delay_Type | Cause_Of_Delay1 | Cause_Of_Delay2 | Cause_Of_Delay3 | Flight_Or_Truck | Delay_Time | Comments                          | Website_Link  | Emp_ID  | Emp_Name      | EST_AA_DELV | EST_AM_DELV | EST_PM_DELV | ETA_on_road | HAL_ODA_available | Same_Day_Reattempts | Courier_Contact | PU_Affected |
      | 3810317  | 3810317  | PHLR          | Ramp           | PHLR        | YES                       | Inbound    | WEATHER         | MECHANICAL      | OTHER           | TRUCK           | 1111       | Pushpa:RAMP:PHLR:Y:1:9:2020:11:33 | www.fedex.com | 3806310 | Pushpalatha J | 1815        | 1614        | 1514        | 1814        | 1519              | YES                 | NO              | YES         |

 