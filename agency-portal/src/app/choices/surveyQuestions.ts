export const SURVEY_TITLE = "UNEMPLOYMENT INSURANCE QUALITY CONTROL CLAIMANT QUESTIONNAIRE";
export const SURVEY_DEFINITION = "{\"title\":\"UNEMPLOYMENT INSURANCE QUALITY CONTROL CLAIMANT QUESTIONNAIRE\",\"pages\":[{\"name\":\"Introduction\",\"elements\":[{\"type\":\"radiogroup\",\"name\":\"question2\",\"title\":\"Are you a citizen of the United States?\",\"isRequired\":true,\"choices\":[{\"value\":\"item1\",\"text\":\"Yes\"},{\"value\":\"item2\",\"text\":\"No\"}]},{\"type\":\"radiogroup\",\"name\":\"question3\",\"visibleIf\":\"{question2} = \\\"item2\\\"\",\"title\":\" When you were working in the U.S., were you issued an Alien Registration Receipt Card, Form I-151, commonly called a \\\"green card\\\"? \",\"isRequired\":true,\"choices\":[{\"value\":\"item1\",\"text\":\"Yes\"},{\"value\":\"item2\",\"text\":\"No\"}]},{\"type\":\"text\",\"name\":\"question4\",\"visibleIf\":\"{question3} = \\\"item2\\\"\",\"title\":\"When you were working in the U.S., what document or form number were you issued?\",\"isRequired\":true}],\"title\":\"Preliminaries\",\"description\":\"Please answer the following questions as accurately as possible.\\nIf you do not know the answer, leave it blank. The interviewer\\nwill discuss it with you later. If you need help, please ask.\\nPlease print or write clearly.\\n\\nYour answers will be used to determine if your unemployment\\ninsurance benefits were paid properly. The information you give\\nus will be verified. The law provides penalties for false\\nstatements to obtain benefits.\"},{\"name\":\"Educational Background\",\"elements\":[{\"type\":\"radiogroup\",\"name\":\"question5\",\"title\":\"What is the highest level of academic schooling you completed? (A high school equivalency diploma or GED is equal to 12 years of school.)\",\"isRequired\":true,\"choices\":[{\"value\":\"item1\",\"text\":\"Grade School\"},{\"value\":\"item2\",\"text\":\"High School\"},{\"value\":\"item3\",\"text\":\"College\"}]},{\"type\":\"radiogroup\",\"name\":\"question6\",\"visibleIf\":\"{question5} = \\\"item1\\\"\",\"title\":\"What grade level have you finished in grade school?\",\"isRequired\":true,\"choices\":[{\"value\":\"item1\",\"text\":\"1st Grade\"},{\"value\":\"item2\",\"text\":\"2nd Grade\"},{\"value\":\"item3\",\"text\":\"3rd Grade\"},{\"value\":\"item4\",\"text\":\"4th Grade\"},{\"value\":\"item5\",\"text\":\"5th Grade\"},{\"value\":\"item6\",\"text\":\"6th Grade\"},{\"value\":\"item7\",\"text\":\"7th Grade\"},{\"value\":\"item8\",\"text\":\"8th Grade\"}]},{\"type\":\"radiogroup\",\"name\":\"question7\",\"visibleIf\":\"{question5} = \\\"item2\\\"\",\"title\":\"What grade level have you finished in high school?\",\"isRequired\":true,\"choices\":[{\"value\":\"item1\",\"text\":\"9th Grade\"},{\"value\":\"item2\",\"text\":\"10th Grade\"},{\"value\":\"item3\",\"text\":\"11th Grade\"},{\"value\":\"item4\",\"text\":\"12th Grade\"}]},{\"type\":\"radiogroup\",\"name\":\"question8\",\"visibleIf\":\"{question5} = \\\"item3\\\"\",\"title\":\"What degree did you get in College?\",\"isRequired\":true,\"choices\":[{\"value\":\"item1\",\"text\":\"Undergraduate Degree\"},{\"value\":\"item2\",\"text\":\"Associate Degree\"},{\"value\":\"item3\",\"text\":\"Graduate Degree\"}]},{\"type\":\"text\",\"name\":\"question15\",\"visibleIf\":\"{question5} = \\\"item3\\\"\",\"title\":\"What was/were your major area(s) of study?\",\"isRequired\":true},{\"type\":\"datepicker\",\"name\":\"question9\",\"title\":\"When did you last attend school?\",\"isRequired\":true},{\"type\":\"text\",\"name\":\"question10\",\"title\":\"Name of School you last attended\",\"isRequired\":true},{\"type\":\"multipletext\",\"name\":\"question12\",\"title\":\"Location of last school you attended\",\"isRequired\":true,\"items\":[{\"name\":\"text1\",\"title\":\"City\"},{\"name\":\"text2\",\"title\":\"State\"}]},{\"type\":\"radiogroup\",\"name\":\"question16\",\"title\":\"Have you ever had vocational or technical school training? \",\"isRequired\":true,\"choices\":[{\"value\":\"item1\",\"text\":\"Yes\"},{\"value\":\"item2\",\"text\":\"No\"}]},{\"type\":\"text\",\"name\":\"question17\",\"visibleIf\":\"{question16} = \\\"item1\\\"\",\"title\":\"What kind of certificate do you have?\",\"isRequired\":true}],\"title\":\"Educational Background\"},{\"name\":\"Employment History\",\"elements\":[{\"type\":\"matrixdropdown\",\"name\":\"question1\",\"title\":\"Please provide the following information about your jobs prior to filing your most recent claim for unemployment. (BEGIN WITH YOUR MOST RECENT EMPLOYER AND WORK BACK):\",\"isRequired\":true,\"columns\":[{\"name\":\"Most Recent Employer\"},{\"name\":\"2nd Most Recent Employer\"},{\"name\":\"3rd Most Recent Employer\"},{\"name\":\"4th Most Recent Employer\"}],\"choices\":[1,2,3,4,5],\"cellType\":\"text\",\"rows\":[\" Employer name and address\",\"Name of supervisor\",\"Address/location of job site\",\"Phone number of employer\",\"Type of Business\",\"Last Day Worked\",\"Job Title\",\"Usual Wage\",\"Reason for Separation\"]},{\"type\":\"checkbox\",\"name\":\"question11\",\"title\":\"Which days of the week did you usually work on your most recent job.\",\"isRequired\":true,\"choices\":[\"Sunday\",\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\"]},{\"type\":\"radiogroup\",\"name\":\"question13\",\"title\":\"What shift did you usually work on your most recent job? \",\"isRequired\":true,\"choices\":[\"1st Shift - Day\",\"2nd Shift - Swing\",\"3rd Shift - Night\",\"Other Shift - Including Rotation\"]},{\"type\":\"comment\",\"name\":\"question14\",\"title\":\"What were your main duties while at your most recent job? \",\"isRequired\":true},{\"type\":\"radiogroup\",\"name\":\"Is this the kind of work you usually do? \",\"isRequired\":true,\"choices\":[\"Yes\",\"No\"]},{\"type\":\"comment\",\"name\":\"What kind of work do you usually do?\",\"visibleIf\":\"{Is this the kind of work you usually do? } = \\\"No\\\"\",\"isRequired\":true},{\"type\":\"text\",\"name\":\"question18\",\"title\":\"What is your normal wage for the work you usually do?  (per month)\",\"isRequired\":true},{\"type\":\"radiogroup\",\"name\":\"question19\",\"title\":\"Do you expect to be called back to work by any past employer? \",\"isRequired\":true,\"choices\":[{\"value\":\"item1\",\"text\":\"Yes\"},{\"value\":\"item2\",\"text\":\"No\"}]},{\"type\":\"radiogroup\",\"name\":\"question20\",\"title\":\"Do you have or have you received a recall notice? \",\"choices\":[{\"value\":\"item1\",\"text\":\"Yes\"},{\"value\":\"item2\",\"text\":\"No\"}]},{\"type\":\"datepicker\",\"name\":\"question21\",\"visibleIf\":\"{question20} = \\\"item1\\\"\",\"title\":\"When were you told you would be recalled?\",\"isRequired\":true},{\"type\":\"text\",\"name\":\"question22\",\"visibleIf\":\"{question20} = \\\"item1\\\"\",\"title\":\"Who notified you about the recall? \",\"isRequired\":true},{\"type\":\"datepicker\",\"name\":\"question23\",\"visibleIf\":\"{question20} = \\\"item1\\\"\",\"title\":\"When will you report back to work?\",\"isRequired\":true},{\"type\":\"text\",\"name\":\"question24\",\"visibleIf\":\"{question20} = \\\"item1\\\"\",\"title\":\"Name of employer\",\"isRequired\":true},{\"type\":\"multipletext\",\"name\":\"question25\",\"visibleIf\":\"{question20} = \\\"item1\\\"\",\"title\":\"Address of employer \",\"isRequired\":true,\"items\":[{\"name\":\"Street\"},{\"name\":\"City\"},{\"name\":\"State\"},{\"name\":\"Zip Code\"}]}],\"title\":\"Employment History\"},{\"name\":\"Work Search\",\"elements\":[{\"type\":\"text\",\"name\":\"question26\",\"title\":\"How many miles are you willing to travel one-way daily to a job?\",\"isRequired\":true},{\"type\":\"text\",\"name\":\"question27\",\"title\":\"How many minutes are you willing to travel one-way daily to a job? \",\"isRequired\":true},{\"type\":\"radiogroup\",\"name\":\"question28\",\"title\":\"Do you have a valid driver's license? \",\"isRequired\":true,\"choices\":[{\"value\":\"item1\",\"text\":\"Yes\"},{\"value\":\"item2\",\"text\":\"No\"}]},{\"type\":\"checkbox\",\"name\":\"question29\",\"title\":\"By what means do you normally travel to look for work? \",\"hasOther\":true,\"choices\":[{\"value\":\"item1\",\"text\":\"Personally owned vehicle\"},{\"value\":\"item2\",\"text\":\"Borrow a vehicle\"},{\"value\":\"item3\",\"text\":\"Ride with friends or relatives\"},{\"value\":\"item4\",\"text\":\"Public Transportation\"}]},{\"type\":\"text\",\"name\":\"question30\",\"title\":\"In what location(s) do you plan to look for work?\"},{\"type\":\"text\",\"name\":\"question31\",\"title\":\"In what location(s) have you looked for work? \"},{\"type\":\"radiogroup\",\"name\":\"question32\",\"title\":\"Would a job have to last a certain period of time before you  would accept it? \",\"choices\":[{\"value\":\"item1\",\"text\":\"Yes\"},{\"value\":\"item2\",\"text\":\"No\"}]},{\"type\":\"matrixdropdown\",\"name\":\"question33\",\"title\":\"What is the type of work you are looking for and what is the length and type of experience you have in this occupation? \",\"isRequired\":true,\"columns\":[{\"name\":\"Type of Work\"},{\"name\":\"Length of Experience\"}],\"choices\":[1,2,3,4,5],\"cellType\":\"text\",\"rows\":[{\"value\":\"item1\",\"text\":\"a\"},{\"value\":\"item2\",\"text\":\"b\"},{\"value\":\"item3\",\"text\":\"c\"},{\"value\":\"item4\",\"text\":\"d\"}]},{\"type\":\"text\",\"name\":\"question34\",\"title\":\"What is the lowest rate of pay you will accept for a job?\"},{\"type\":\"checkbox\",\"name\":\"question35\",\"title\":\"Which shifts are you willing and able to work on a job?\",\"choices\":[{\"value\":\"item1\",\"text\":\"1st Shift - Day\"},{\"value\":\"item2\",\"text\":\"2nd Shift - Swing\"},{\"value\":\"item3\",\"text\":\"3rd Shift - Night\"},{\"value\":\"item4\",\"text\":\"Other Shift - Including Rotation\"}]},{\"type\":\"checkbox\",\"name\":\"question36\",\"title\":\"Which days of the week are you willing and able to work\",\"choices\":[{\"value\":\"item1\",\"text\":\"Sunday\"},{\"value\":\"item2\",\"text\":\"Monday\"},{\"value\":\"item3\",\"text\":\"Tuesday\"},{\"value\":\"item4\",\"text\":\"Wednesday\"},{\"value\":\"item5\",\"text\":\"Thursday\"},{\"value\":\"item6\",\"text\":\"Friday\"},{\"value\":\"item7\",\"text\":\"Saturday\"}]}],\"title\":\"Work Search\",\"description\":\"The next group of questions ask about your efforts to find work. Some\\nof these questions will refer to a specific week, called \\\" THE WEEK.\\\"\\n\\\"THE WEEK\\\" is the week that began on <placeholder date> and ended on\\n<placeholder date>. Please keep these dates in mind when\\nanswering the questions about \\\"THE WEEK.\\\" \"}]}";