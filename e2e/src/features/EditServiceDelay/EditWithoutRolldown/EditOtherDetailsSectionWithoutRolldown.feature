@EditDelay
Feature: Edit Delay functionality test cases ----- Delay Application

  @Regression @EditDelayScenario
    Scenario Outline: Edit the Other Details Section for Service Delay Request Without Rolldown locations

    Given Login to the Eops with "<Username>" and "<Password>" and Select the Service Delay Application
    When Enter Location Code "<Location_Code>" and Click on Go button and it should navigate to Service Delay Queue Page
    And Click on Create New Delay
    And Select Location Level "<Location_Level>" and Enter the Location ID "<Location_ID>"
    And Check the Rolldown Location Checkbox "<Include_RollDown_Location>" if yes to include Rolldown Location
    And Select the Delay Type "<Delay_Type>"
    And Select the Flight or Truck "<Flight_Or_Truck>" and Enter the Delay Time "<Delay_Time>"
    And Select the Cause of delay "<Cause_Of_Delay1>", "<Cause_Of_Delay2>" and "<Cause_Of_Delay3>"
    And Enter the Comments "<Comments>"
    And Enter the Other Details of EST AA DELV "<EST_AA_DELV>" , EST AM DELV "<EST_AM_DELV>" , EST PM DELV "<EST_PM_DELV>" , ETA on road "<ETA_on_road>" and HAL ODA available "<HAL_ODA_available>"
    And Select Same Day Reattempts as Yes or No "<Same_Day_Reattempts>"
    And Select Courier Contact as Yes or No "<Courier_Contact>"
    And Select PU's Affected as Yes or No "<PU_Affected>"
    And Enter the Emp ID "<Emp_ID>" and Verify the added Employee Name "<Emp_Name>" and Employee ID in the Contact Details
    And Click on Submit Button and It should navigate to the Queue page with the Requests created
    # And Verify the Created Record in the Queue page with the "<Comments>"
   
    And Click on Show Filter and Enter the Location ID "<Location_ID>" to be edited
    And Click on Edit button and it should navigate to Edit Delay Page
    And Check the Rolldown Location Checkbox "<Edit_Include_RollDown_Location>" if yes to include Rolldown Location
   
    And Update the Other Details of EST AA DELV "<EST_AA_DELV_Change>" , EST AM DELV "<EST_AM_DELV_Change>" , EST PM DELV "<EST_PM_DELV_Change>" , ETA on road "<ETA_on_road_Change>" and HAL ODA available "<HAL_ODA_available_Change>"
    And Update Same Day Reattempts as Yes or No "<Same_Day_Reattempts_Change>"
    And Update Courier Contact as Yes or No "<Courier_Contact_Change>"
    And Update PU's Affected as Yes or No "<PU_Affected_Change>"
   
    And Click on Update button and it should navigate to Work Queue Screen
    And Click on Edit button and it should navigate to Edit Delay Page 

    And Verify the Other Details of EST AA DELV "<EST_AA_DELV_Change>" , EST AM DELV "<EST_AM_DELV_Change>" , EST PM DELV "<EST_PM_DELV_Change>" , ETA on road "<ETA_on_road_Change>" and HAL ODA available "<HAL_ODA_available_Change>" updated
    And Verify Same Day Reattempts as Yes or No "<Same_Day_Reattempts_Change>"
    And Verify Courier Contact as Yes or No "<Courier_Contact_Change>"
    And Verify PU's Affected as Yes or No "<PU_Affected_Change>"
    # Then Logout from the Delay Application

    Examples:
    | Username | Password | Location_Code | Location_Level | Location_ID | Include_RollDown_Location | Edit_Include_RollDown_Location | Delay_Type | Cause_Of_Delay1 | Cause_Of_Delay2 | Cause_Of_Delay3 | Cause_Of_Flight_Or_Truck | Delay_Time | Comments            | Website_Link  | Emp_ID  | Emp_Name      | EST_AA_DELV | EST_AA_DELV_Change | EST_AM_DELV | EST_AM_DELV_Change | EST_PM_DELV | EST_PM_DELV_Change | ETA_on_road | ETA_on_road_Change | HAL_ODA_available | HAL_ODA_available_Change | Same_Day_Reattempts | Same_Day_Reattempts_Change | Courier_Contact | Courier_Contact_Change | PU_Affected | PU_Affected_Change |
    | 3802362  | 3802362  | INTCU         | Region         | INTCU       | No                        | No                             | Inbound    |  WEATHER        |                 |   OTHER         | Flight                   | 1011       | Pushpa:Created:6:52 | www.fedex.com | 3806310 | Pushpalatha J | 1815        | 12:32              | 1614        | 0914               | 1814        | 1519               | YES         | NO                 | NO                | YES                      | YES                 | NO                         | NO              | YES                    | YES         | NO                 |