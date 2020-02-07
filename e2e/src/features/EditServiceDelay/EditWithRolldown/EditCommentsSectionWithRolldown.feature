@EditDelay
Feature: Edit Delay functionality test cases ----- Delay Application

    
  @Regression @EditCommentSection
    Scenario Outline: Edit the Delay Details Section for Service Delay Request with Rolldown location

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

    And Check the Rolldown Location Checkbox in Edit Screen "<Edit_Include_RollDown_Location>" if yes to include Rolldown Location
    And Update the Comments "<Update_Comments>"
  
    And Click on Update button and it should navigate to Work Queue Screen
    And Click on Show Filter and Enter the Location ID "<Location_ID>" to be edited

    And Verify the Comments Updated "<Update_Comments>"
    # Then Logout from the Delay Application


    Examples:
    | Username | Password | Location_Code | Location_Level | Location_ID | Include_RollDown_Location | Edit_Include_RollDown_Location | Delay_Type | Delay_Type_Change | Cause_Of_Delay1 | Cause_Of_Delay2 | Cause_Of_Delay3 | Flight_Or_Truck | Delay_Time |Delay_Time_Change |  Comments                          | Update_Comments      | Website_Link  | Emp_ID  | Emp_Name      | EST_AA_DELV | EST_AM_DELV | EST_PM_DELV | ETA_on_road | HAL_ODA_available | Same_Day_Reattempts | Courier_Contact | PU_Affected |
    | 5175430  | 5175430  | RPEWK         | Location       | YMXRT       | YES                       | YES                            | Outbound   | Inbound           |   WEATHER       |                 | OTHER           | FLIGHT          | 0211       | 1111             | Pushpa:Create:YMXRT:2:5:2020:10:52 | Pushpa:Edited: 6:03  | www.fedex.com | 3806310 | Pushpalatha J | 1815        | 1614        | 1514        | 1814        | 1519              | YES                 | YES             | YES         |  