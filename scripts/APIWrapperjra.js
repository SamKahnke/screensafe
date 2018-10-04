/*******************************************************************************
**
** FileName: APIWrapperjra.js
**
*******************************************************************************/
/*******************************************************************************
**
** Pathlore Software Corporation (Pathlore) grants you ("Licensee") a non-
** exclusive, royalty free, license to use, modify and redistribute this
** software in source and binary code form, provided that i) this copyright
** notice and license appear on all copies of the software; and ii) Licensee does
** not utilize the software in a manner which is disparaging to Pathlore.
**
** This software is provided "AS IS," without a warranty of any kind.  ALL
** EXPRESS OR IMPLIED CONDITIONS, REPRESENTATIONS AND WARRANTIES, INCLUDING ANY
** IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-
** INFRINGEMENT, ARE HEREBY EXCLUDED.  CTC AND ITS LICENSORS SHALL NOT BE LIABLE
** FOR ANY DAMAGES SUFFERED BY LICENSEE AS A RESULT OF USING, MODIFYING OR
** DISTRIBUTING THE SOFTWARE OR ITS DERIVATIVES.  IN NO EVENT WILL CTC  OR ITS
** LICENSORS BE LIABLE FOR ANY LOST REVENUE, PROFIT OR DATA, OR FOR DIRECT,
** INDIRECT, SPECIAL, CONSEQUENTIAL, INCIDENTAL OR PUNITIVE DAMAGES, HOWEVER
** CAUSED AND REGARDLESS OF THE THEORY OF LIABILITY, ARISING OUT OF THE USE OF
** OR INABILITY TO USE SOFTWARE, EVEN IF PATHLORE HAS BEEN ADVISED OF THE POSSIBILITY
** OF SUCH DAMAGES.
**
*******************************************************************************/

// local variable definitions
var API = FindAPI(window);
// jra variables

var startpage = "index.htm";



/******************************************************************************************
**
** Function: LMSInitialize()
** Inputs:	None
** Return:	CMIBoolean true if the initialization was successful, or
**			CMIBoolean false if the initialization failed.
**
** Description:
** Initialize communication with LMS by calling the LMSInitialize 
** function which will be implemented by the LMS, if the LMS is 
** compliant with the SCORM.
**
******************************************************************************************/
function LMSInitialize() 
{
   if (API == null)
   {
      alert("Unable to locate the LMS's API Implementation.\nLMSInitialize was not successful.");
      return false;
   }
   return API.LMSInitialize();
}

/******************************************************************************************
**
** Function LMSFinish()
** Inputs:	None
** Return:	CMIBoolean
**
** Description:
** Close communication with LMS by calling the LMSFinish 
** function which will be implemented by the LMS, if the LMS is 
** compliant with the SCORM.
**
******************************************************************************************/
function LMSFinish()
{
   if (API == null)
   {
      alert("Unable to locate the LMS's API Implementation.\nLMSFinish was not successful.");
      return false;
   }
   else
      return API.LMSFinish();
} 
/******************************************************************************************
**
** Function LMSGetValue(name) 
** Inputs:	name - string representing the cmi data model defined category or 
**				   element (e.g. cmi.core.student_id)
** Return:	The value presently assigned by the LMS to the cmi data model 
**			element defined by the element or category identified by the name
**			input value.
**
** Description:	
** Wraps the call to the LMS LMSGetValue method
**
******************************************************************************************/
function LMSGetValue(name)
{
   if (API == null)
   {
      alert("Unable to locate the LMS's API Implementation.\nLMSGetValue was not successful.");
      return null;
   }
   else
   {
      return API.LMSGetValue(name);
   }
}
/******************************************************************************************
**
** Function LMSSetValue(name, value) 
** Inputs:	name - string representing the cmi data model defined category or element
**			value - the value that the named element or category will be assigned
** Return:	None
**
** Description:
** Wraps the call to the LMS LMSSetValue method
**
******************************************************************************************/
function LMSSetValue(name, value) 
{
   if (API == null)
   {
      alert("Unable to locate the LMS's API Implementation.\nLMSSetValue was not successful.");
   }
   else
   {
      API.LMSSetValue(name, value); 
      return;
   }
}
/******************************************************************************************
**
** Function LMSCommit() 
** Inputs:	None
** Return:	None
**
** Description:
** Call the LMSCommit function which will be implemented by the LMS, 
** if the LMS is compliant with the SCORM.
**
******************************************************************************************/
function LMSCommit(code)
{
   if (API == null)
   {
      alert("Unable to locate the LMS's API Implementation.\nLMSCommit was not successful.");
   }
   else
   {
      API.LMSCommit(code);
   }   
   return;
   
} 
/******************************************************************************************
**
** Function LMSGetLastError() 
** Inputs:	None
** Return:	The error code (integer format) that was set by the last LMS function call
**
** Description:
** Call the LMSGetLastError function which will be implemented by the LMS, 
** if the LMS is compliant with the SCORM.
**
******************************************************************************************/
function LMSGetLastError() 
{
   if (API == null)
   {
      alert("Unable to locate the LMS's API Implementation.\nLMSGetLastError was not successful.");
   }
   return API.LMSGetLastError();
   
} 
/******************************************************************************************
**
** Function LMSGetErrorString(errorCode)
** Inputs:	errorCode - Error Code(integer format)
** Return:	The textual description that corresponds to the input error code 
**
** Description:
** Call the LMSGetErrorString function which will be implemented by the LMS, 
** if the LMS is compliant with the SCORM.
**
******************************************************************************************/
function LMSGetErrorString(errorCode) 
{
   if (API == null)
   {
      alert("Unable to locate the LMS's API Implementation.\nLMSGetErrorString was not successful.");
   }
   return API.LMSGetErrorString(errorCode);
   
} 
/******************************************************************************************
**
** Function LMSGetDiagnostic(errorCode) 
** Inputs:	errorCode - Error Code(integer format), or null
** Return:	The vendor specific textual description that corresponds to the input error code 
**
** Description:
** Call the LMSGetDiagnostic function which will be implemented by the LMS, 
** if the LMS is compliant with the SCORM.
**
******************************************************************************************/
function LMSGetDiagnostic(errorCode) 
{
   if (API == null)
   {
      alert("Unable to locate the LMS's API Implementation.\nLMSGetDiagnostic was not successful.");
   }
   return API.LMSGetDiagnostic(errorCode);
   
} 

/******************************************************************************************
**
** Function FindAPI( win )
** Inputs:	window object
** Return:	If an API object is found, it is returned, otherwise null is returned.
**
** Description:
** This function looks for an object named API, first in the current window's hierarchy, 
**  and then, if necessary, in the current window's opener window hierarchy (if there is
**  an opener window).
******************************************************************************************/
function FindAPI( win ) 
   {
	if (win.API != null)
      {
      return win.API
      }
   else if (win.parent != null && win.parent != win)
      {
      return FindAPI( win.parent )
      }
   else if (win.opener != null)
      {
      return FindAPI( win.opener )
      }
   return null
   }
/****************************************************************************************************
JRA function to gather data upon entry to course.
**************************************************************************************************/
function jraGetData()
	{
	//StartTimer();
	myDate = new Date();	document.jraform.tf_date.value=(myDate.getMonth()+1)+("/"+myDate.getDate()+"/"+myDate.getFullYear());
	document.jraform.tf_name.value=LMSGetValue('cmi.core.student_name')
	document.jraform.tf_id.value=LMSGetValue('cmi.core.student_id')
	document.jraform.tf_entry.value=LMSGetValue('cmi.core.entry')
	document.jraform.tf_status.value=LMSGetValue('cmi.core.lesson_status')
	document.jraform.tf_mode.value=LMSGetValue('cmi.core.lesson_mode')
	document.jraform.tf_location.value=LMSGetValue('cmi.core.lesson_location')
	document.jraform.tf_time.value=LMSGetValue('cmi.core.total_time')
	document.jraform.tf_score.value=LMSGetValue('cmi.core.score.raw')
	}
/****************************************************************************************************
JRA function for setting time and status upon exiting the course.
***************************************************************************************************/
function exit()
	{
	LMSSetValue("cmi.core.lesson_status", "completed");
	EndTimer();
	//LMSGetValue("cmi.core.total_time");
	//alert("trying to get time");
	//LMSCommit();
	//alert("LMSCommit called");
	LMSFinish();
	//alert("LMSFinish called"); TAG
	window.close();
	}
/****************************************************************************************************
JRA function to go to the next page.
***************************************************************************************************/
function changepage(page)
	{
	parent.content.location.href = page;
	}
/****************************************************************************************************
JRA function to set the bookmark.
***************************************************************************************************/
//Following lines commented out by Rivertown
//function setbookmark()
//	{alert("bookmark being set");
//	var currpage = parent.content.location.href
//	LMSSetValue("cmi.core.lesson_location", currpage);
//	}
// End of Rivertown edits
/****************************************************************************************************
JRA function to check for bookmark.
***************************************************************************************************/
//Following lines commented out by Rivertown
//function checkbmark()
//	{var bmark = LMSGetValue("cmi.core.lesson_location")
//	if (LMSGetValue("cmi.core.lesson_status")=="incomplete")
//		{
//		//alert("checking bmark status") TAG
//		if (bmark!=null)
//			{ 
//			alert(bmark);
//			alert("try to go to bmark")
//			changepage(bmark)
//			}
//		}
//	}
// End of Rivertown edits
/****************************************************************************************************
JRA function to quit at the end of the course.
***************************************************************************************************/
function quit()
	{
	LMSSetValue("cmi.core.score.raw", scorevar);
	
	{alert("setting raw score");
	 if (scorevar==4)
		{alert("raw score is four");
		 LMSSetValue("cmi.core.lesson_status", "passed");
		 EndTimer();
		 alert("end timer called")
		 LMSGetValue("cmi.core.total_time");
	 	 alert("trying to get time");
		 LMSFinish();
		 alert("LMSFinish called");
		 window.close("start.htm");
		}
	else
		{alert("raw score is less than four");
	         LMSSetValue("cmi.core.lesson_status", "failed");
		 EndTimer();
		 alert("end timer called")
		 LMSGetValue("cmi.core.total_time");
	 	 alert("trying to get time");
		 LMSFinish();
		 alert("LMSFinish called");
		 window.close("start.htm");
		}
}
}

	
/****************************************************************************************************
JRA function to test objective data element
***************************************************************************************************/
function jraTest()
	{
	LMSSetValue("cmi.objectives.0.id", "CAT1a");
	var jraobj1 = LMSGetValue("cmi.objectives.0.id");
	//alert(jraobj1);
	LMSSetValue("cmi.objectives.1.id", "TOP1a");
	var jraobj2 = LMSGetValue("cmi.objectives.1.id");
	//alert(jraobj2);
	}

