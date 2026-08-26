import React from 'react';
import { Callout, Table, Card } from '../components/Visual.jsx';

const IMG = 'ch03_job_analysis';

export default {
  id: 3,
  title: 'Job Analysis',
  subtitle:
    'The foundation of every other HR function: terminology, data sources and collection methods, work- vs. worker-oriented frameworks, data quality, and job evaluation.',

  blocks: [
    // ------------------------------------------------------------------ 1
    {
      id: 'what-and-why',
      title: 'What Job Analysis Is & How Its Data Are Used',
      subtitle: 'The basis of every other HR function (Figure 3.1)',
      images: [
        {
          src: `${IMG}/03a_fig3-1_job_analysis_and_hr.png`,
          alt: 'Figure 3.1: a hub-and-spoke diagram with Job Analysis at the center connected to Recruitment, Job Design, Criterion Measures, Selection, Training, Performance Appraisal, and Job Descriptions/Specifications.',
          caption: 'Figure 3.1 — The relationship between job analysis and other HR functions.'
        }
      ],
      content: (
        <>
          <Callout kind="danger" title="The definition — memorize the three components">
            <strong>Job analysis:</strong> <em>the systematic process that helps you identify (1) the job tasks
            and responsibilities, (2) KSAOs, and (3) critical incidents faced on the job.</em>
          </Callout>

          <p>
            Job analysis has been described as <strong>the basis of other HR functions</strong> (Morgeson &amp;
            Dierdorff, 2011). The chapter opens with the customer-service example: before you can recruit or hire,
            you must know what the tasks and responsibilities are, what KSAOs a person needs, and what critical
            challenges the job presents.
          </p>

          <Table
            headers={['HR function', 'How job analysis feeds it']}
            rows={[
              [
                <strong key="1">Job descriptions & specifications</strong>,
                'A job analysis, which is HIGHLY DETAILED, is the basis for these, which are LESS so.'
              ],
              [
                <strong key="2">Recruitment</strong>,
                'You need a job analysis to understand what qualifications (skills, experience) the job requires so you can build a large pool of qualified applicants. Consider how much easier it is to write a job ad with detailed information about the job.'
              ],
              [
                <strong key="3">Selection procedures</strong>,
                'Necessary to choose and develop VALID selection procedures — tests and interviews. Legally defensible selection systems in the US should be based on a job analysis (Uniform Guidelines, 1978), and SIOP’s Principles (2018) note job analysis is a necessary part of developing a good selection system in most situations.'
              ],
              [
                <strong key="4">Criterion measures</strong>,
                'Necessary to develop strong measures of job performance (Ch. 4) that determine whether selection procedures actually result in hiring better performers — e.g., how many customers a specialist helps per day, and whether high interview scores correspond to later high performance.'
              ],
              [
                <strong key="5">Performance appraisal</strong>,
                'Appraisals (Ch. 5) should be based on a job analysis. Research shows appraisals based on job analysis may be a key part of making them LESS SUSCEPTIBLE TO LEGAL CHALLENGES (Feild & Holley, 1982).'
              ],
              [
                <strong key="6">Training</strong>,
                'A critical part of a thorough TRAINING NEEDS ASSESSMENT (Ch. 8). "How can someone effectively train employees if they do not know the knowledge, skills, and abilities that a person needs to do the job?"'
              ],
              [
                <strong key="7">Job design</strong>,
                'A systematic analysis of the organization of work; often includes job analysis to identify the best way to allocate tasks and responsibilities among different jobs.'
              ],
              [
                <strong key="8">Job evaluation</strong>,
                'A particular type of job analysis used to determine the relative value or pay that jobs have in an organization. Generally carried out by HR compensation specialists.'
              ]
            ]}
          />

          <Callout kind="warn" title="Analysis vs. description vs. specification — a guaranteed MCQ">
            <Table
              headers={['Document', 'Depth', 'What it contains']}
              rows={[
                [
                  <strong key="a">Job analysis</strong>,
                  'Deepest',
                  'A deep analytical process describing the job and what a person needs to perform it. A good one lets a person relatively unfamiliar with the job understand it. May describe HUNDREDS of tasks.'
                ],
                [
                  <strong key="d">Job description</strong>,
                  'Middle',
                  'A SIMPLER document describing the job’s main responsibilities — perhaps only a page or two. Might be given to employees so they better understand their jobs.'
                ],
                [
                  <strong key="s">Job specifications</strong>,
                  'Briefest',
                  'A relatively brief overview of the CHARACTERISTICS needed to do a job, rather than a lengthy list, INCLUDING THE MINIMUM QUALIFICATIONS.'
                ]
              ]}
            />
          </Callout>
        </>
      )
    },

    // ------------------------------------------------------------------ 2
    {
      id: 'terminology',
      title: 'Job Analysis Terminology',
      subtitle: 'Task, functional category, KSA/KSAO, SME, incumbent, supervisor, job analyst',
      content: (
        <>
          <Table
            headers={['Term', 'Definition']}
            rows={[
              [
                <strong key="t">Task</strong>,
                'A basic element that can be used to describe a job. Together, a large set of tasks makes up a job. Often stated in terms of an ACTION VERB, OBJECT, and PURPOSE.'
              ],
              [
                <strong key="f">Functional categories</strong>,
                'A group of tasks that serve a similar purpose. These groups are sometimes said to be grouped into larger "responsibilities."'
              ],
              [
                <strong key="k">Knowledge, Skills, and Abilities (KSAs)</strong>,
                'Used to describe the CHARACTERISTICS AN EMPLOYEE NEEDS to do the job (as opposed to tasks, which describe the JOB).'
              ],
              [
                <strong key="s">Subject matter expert (SME)</strong>,
                'A job expert with a great deal of knowledge about and/or experience of the job — the people from whom we get job analysis information. Typically an incumbent or supervisor.'
              ],
              [
                <strong key="i">Incumbent</strong>,
                'The person DOING a given job — the person most familiar with the job.'
              ],
              [
                <strong key="su">Supervisors</strong>,
                'Those overseeing job incumbents. As SMEs they may have a better idea of HOW A GIVEN JOB FITS INTO THE OVERALL ORGANIZATION.'
              ],
              [
                <strong key="ja">Job analyst</strong>,
                'The person conducting a job analysis — usually an I-O psychologist or an HR specialist (internal or hired from outside).'
              ]
            ]}
          />

          <Callout kind="info" title="The task-statement example">
            <strong>&ldquo;Answers (action verb) telephone calls (object) to resolve customers&rsquo; issues and
            concerns (purpose).&rdquo;</strong> Those three tasks below all group into the functional category{' '}
            <em>&ldquo;Responding to customer complaints&rdquo;</em>:
            <ul className="list-disc pl-5 mt-1">
              <li>answers telephone calls to resolve customers&rsquo; issues and concerns</li>
              <li>writes e-mails to address customers&rsquo; inquiries</li>
              <li>engages in chat sessions with customers to answer their concerns about products and services</li>
            </ul>
          </Callout>

          <Callout kind="danger" title="K vs. S vs. A — the distinction, and the caveat">
            <Table
              headers={['Component', 'Textbook definition', 'Example given']}
              rows={[
                [<strong key="k">Knowledge</strong>, 'Generally something someone can LEARN, as in from a book.', '"Knowledge of company rules and procedures"'],
                [<strong key="s">Skill</strong>, 'Something they can LEARN HOW TO DO.', '"Ability to handle customer complaints"'],
                [<strong key="a">Ability</strong>, 'Something more LONG-LASTING OR INNATE that the person BRINGS WITH THEM to the job.', '"Mechanical skill"']
              ]}
            />
            <p className="mt-2">
              The authors make two concessions: (1) rather than trying to differentiate the three, it may be
              easier to think of them <strong>collectively as what a person needs to do the job tasks</strong>;
              (2) many I-O psychologists use <strong>KSAOs</strong> — knowledge, skills, abilities,{' '}
              <strong>and other characteristics (including, for instance, personality)</strong> — and the two
              terms are <strong>frequently used interchangeably</strong>.
            </p>
          </Callout>

          <p className="text-sm text-slate-600">
            <strong>Why use both incumbents and supervisors?</strong> Incumbents actually do the job and are most
            familiar with it; supervisors have a better idea of how the job fits into the organization. Together
            they provide <strong>complementary</strong> information.
          </p>
        </>
      )
    },

    // ------------------------------------------------------------------ 3
    {
      id: 'sources',
      title: 'Sources of Job Analysis Data: DOT & O*NET',
      subtitle: 'Existing analyses, and the two government databases',
      images: [
        {
          src: `${IMG}/03b_fig3-2_onet_content_model.png`,
          alt: 'Figure 3.2: the O*NET content model, showing elements used to describe what a worker needs (worker characteristics such as abilities, worker requirements such as knowledge and skills, experience requirements such as licenses) and elements used to describe the work (occupational requirements such as work activities, workforce characteristics such as labor market outlook, occupation-specific information such as tasks and tools).',
          caption: 'Figure 3.2 — Summary of the content model of the O*NET database.'
        }
      ],
      content: (
        <>
          <Card title="Existing job analysis data">
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>
                <strong>Old job analyses from your own company.</strong> If one exists there is no reason to start
                from scratch — assume it needs updating, but it gives you a good start.
              </li>
              <li>
                <strong>A job analysis for a similar job from another organization.</strong>{' '}
                <strong>Not very common in the private sector</strong> because of competition, but{' '}
                <strong>more common in the public sector</strong> — e.g., a city government doing a firefighter
                job analysis could ask a city of similar size with similar buildings and layout.
              </li>
            </ul>
          </Card>

          <Callout kind="danger" title="DOT vs. O*NET — know every contrast">
            <Table
              headers={['', 'Dictionary of Occupational Titles (DOT)', 'Occupational Information Network (O*NET)']}
              rows={[
                ['Publisher', 'US government', 'US Department of Labor (Peterson et al., 2001)'],
                ['Origin', 'Since the 1930s — the Roosevelt Administration wanted to support businesses during the Great Depression by providing job analysis information', 'Developed to solve the DOT’s problems'],
                ['Format', 'PAPER only. Grew to the size of TWO LARGE TELEPHONE BOOKS with thousands of short job descriptions', 'ONLINE database, free at onetonline.org'],
                ['Last version', 'Published in 1991', 'Continuously updated'],
                ['Problems', 'Paper only; did not change as new information was learned; hard to update; did not provide a lot of detail', 'Still does not tell you what a particular job is like in YOUR organization'],
                ['Coverage', 'Just about every job imaginable — from secretary to leather tanner', 'Search a job title and get considerable information; find the title(s) most aligned with your job']
              ]}
            />
            <p className="mt-2 text-sm">
              <strong>Critical caveat for BOTH:</strong> the DOT listings <em>are not job analyses in
              themselves</em> — what a customer service worker does at one company can differ greatly from
              another. Both provide only a <strong>starting point</strong>.
            </p>
          </Callout>

          <Card title="The O*NET content model (Figure 3.2)">
            <Table
              headers={['Elements describing what a WORKER needs', 'Elements describing the WORK']}
              rows={[
                ['Worker characteristics — e.g., abilities', 'Occupational requirements — e.g., work activities'],
                ['Worker requirements — e.g., knowledge, skills', 'Workforce characteristics — e.g., labor market information, long-term outlook for the occupation'],
                ['Experience requirements — e.g., experience, licenses required', 'Occupation-specific information — e.g., tasks performed, tools used']
              ]}
            />
            <p className="text-sm mt-2">
              <strong>How does the data get there?</strong> It is collected via <strong>surveys from employees
              around the US who are in these occupations</strong> — so O*NET tells you what the{' '}
              <strong>average employee</strong> in the occupation does. The chapter flags{' '}
              <strong>workforce characteristics</strong> as especially interesting to students, since it shows
              the expected outlook for a job.
            </p>
          </Card>
        </>
      )
    },

    // ------------------------------------------------------------------ 4
    {
      id: 'collection-methods',
      title: 'Job Analysis Data Collection Methods',
      subtitle: 'Observations, ride-alongs, interviews, focus groups, and surveys',
      images: [
        {
          src: `${IMG}/03c_fig3-3_job_analysis_interview_questions.png`,
          alt: 'Figure 3.3: a numbered list of 18 possible job analysis interview questions covering major responsibilities, critical tasks, a typical day, materials, equipment, forms, documents, working environment, physical demands, hours and shifts, KSAOs for each task, reporting relationships, contacts, supervision, critical work incidents, rules and regulations, and minimum qualifications.',
          caption: 'Figure 3.3 — A list of possible job analysis interview questions for incumbent or supervisor SMEs. (Question 16 generates critical incidents.)'
        }
      ],
      content: (
        <>
          <Callout kind="tip" title="The governing principle">
            <strong>&ldquo;No one method is best — each provides useful information for doing the job
            analysis.&rdquo;</strong> The chapter&rsquo;s conclusion is that <strong>some combination of these
            methods may be the best</strong>, since each has unique advantages and disadvantages.
          </Callout>

          <Table
            headers={['Method', 'Definition / when it shines', 'Watch-outs']}
            rows={[
              [
                <strong key="o">Observations</strong>,
                'One of the most basic ways to learn about a job — watching incumbents and SMEs doing their job. Especially useful when the job is FAIRLY TECHNICAL and the analyst cannot understand technical terms from an interview. The author’s firefighting example: without observing people using the equipment it would be hard to understand what firefighters actually do.',
                'Time-intensive; only captures observable behavior.'
              ],
              [
                <strong key="r">"Ride-along"</strong>,
                'A related observational method, common when much of the work is done IN THE FIELD, such as police work. Riding along with patrol officers may be necessary to thoroughly understand police procedures.',
                '—'
              ],
              [
                <strong key="i">Job analysis interview</strong>,
                'Perhaps one of the MOST COMMON methods. The analyst meets SMEs to ask about typical responsibilities and tasks, KSAs needed, critical incidents faced, and the qualifications and experience needed. Provides RICH information.',
                'Cannot scale to thousands of employees in one job type.'
              ],
              [
                <strong key="f">Focus groups</strong>,
                'The analyst gathers groups of SMEs and asks structured sets of questions about their jobs. A group interview might let SMEs BUILD OFF EACH OTHER in describing the job.',
                'Group settings may cause SMEs NOT to say certain things in front of each other, or to TAILOR what they say. The police example: a power difference between ranks might mean an officer simply agrees with their boss rather than giving their own description.'
              ],
              [
                <strong key="s">Job analysis survey</strong>,
                'A questionnaire given to a large number of employees about the job. Necessary in large organizations with thousands of employees in one job type. Many approaches — task-KSA analysis and the PAQ — rely on surveys.',
                'The main requirement is that the survey ADEQUATELY SAMPLES employees in the job by demographics (gender, ethnicity) AND by different WORK SHIFTS and GEOGRAPHICAL AREAS of the company.'
              ]
            ]}
          />

          <Callout kind="warn" title="Morgeson & Campion (1997) on bias">
            They identify several types of bias affecting the quality of job analysis methods, ranging from{' '}
            <strong>impression management</strong> (wanting to look like a diligent worker in front of others) to{' '}
            <strong>cognitive overload</strong> (a job analysis method too long or tiring for the SME). Different
            methods are susceptible to different biases: <strong>task questionnaires, which may be very long, are
            particularly susceptible to cognitive overload.</strong> The advice: be cognizant of the biases, try
            to reduce them (Sanchez &amp; Levine, 2012), and use multiple methods.
          </Callout>
        </>
      )
    },

    // ------------------------------------------------------------------ 5
    {
      id: 'preparing-smes',
      title: 'Preparing SMEs for the Job Analysis',
      subtitle: 'Why explaining the purpose is critical — and how purpose distorts ratings',
      content: (
        <>
          <p>
            The chapter opens this section with a thought experiment: you are a salesperson and hear that{' '}
            <em>&ldquo;someone from HR wants to come interview you about what you do on your job&rdquo;</em> with
            no further explanation. That could be <strong>frightening</strong> — you might think the company is
            concerned about your performance.
          </p>

          <Callout kind="danger" title="The four consequences of NOT explaining the purpose">
            <ol className="list-decimal pl-5 space-y-1">
              <li>SMEs may find it <strong>threatening</strong>.</li>
              <li>
                SMEs may <strong>not take the process seriously</strong> — e.g., be careless filling out surveys
                — if they do not realize it will affect who is hired.
              </li>
              <li>
                <strong>&ldquo;Perhaps even worse&rdquo;</strong> — employees may draw their own conclusions and
                decide the job analysis is for some <strong>&ldquo;sinister&rdquo;</strong> reason.
              </li>
              <li>
                Under those conditions it may <strong>affect morale</strong>, or employees may even try to{' '}
                <strong>sabotage the job analysis process</strong>.
              </li>
            </ol>
          </Callout>

          <Card title="What the research says">
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>
                A <strong>meta-analysis found SMEs are more likely to provide RELIABLE data if they believe the
                purpose of the job analysis is relevant to them.</strong>
              </li>
              <li>
                <strong>The purpose of the job analysis matters.</strong> SMEs may tend to{' '}
                <strong>INFLATE their ratings when the job analysis is for SELECTION</strong> (DuVernet et al.,
                2015).
              </li>
            </ul>
          </Card>

          <Callout kind="tip" title="Three procedural best practices">
            <ol className="list-decimal pl-5 space-y-1">
              <li>
                SMEs should feel they had the <strong>opportunity to participate</strong> and that{' '}
                <strong>everyone&rsquo;s opinion was heard</strong>.
              </li>
              <li>
                If not all employees are chosen (commonplace with large SME pools), there should be{' '}
                <strong>some explanation as to how SMEs were chosen</strong>.
              </li>
              <li>
                Let SMEs know <strong>what you will ask about — well in advance</strong> of the meeting, giving
                them time to think about what their job involves so they can give complete information.
              </li>
            </ol>
          </Callout>
        </>
      )
    },

    // ------------------------------------------------------------------ 6
    {
      id: 'task-ksa-analysis',
      title: 'Work-Oriented Method 1: Task-KSA Analysis',
      subtitle: 'The task statement formula and where the method fits',
      images: [
        {
          src: `${IMG}/03d_fig3-4_task_statement_structure.png`,
          alt: 'Figure 3.4: a four-box flow showing the structure of a task statement — Action Verb (measures), Object (doorway), Using What (using tape measure), Purpose Why (to properly install door).',
          caption: 'Figure 3.4 — The structure of a task statement, using the job of carpenter.'
        }
      ],
      content: (
        <>
          <Callout kind="info" title="The two families of framework">
            <Table
              headers={['Family', 'Primary unit of analysis', 'Examples in the chapter']}
              rows={[
                [
                  <strong key="w">Work-oriented</strong>,
                  'The characteristics of the JOB',
                  'Task-KSA analysis; Critical incidents technique'
                ],
                [
                  <strong key="wo">Worker-oriented</strong>,
                  'The characteristics of the EMPLOYEE',
                  'Position Analysis Questionnaire (PAQ); Competency modeling; Job Element Method (JEM)'
                ]
              ]}
            />
            <p className="mt-2 text-xs">
              Note: the textbook&rsquo;s glossary labels the <strong>critical incidents technique</strong> as a{' '}
              &ldquo;worker-oriented method,&rdquo; while the body text discusses it under{' '}
              &ldquo;Other Work-Oriented Job Analysis Methods.&rdquo; If a question hinges on this, follow the
              section heading (work-oriented) — but be aware the glossary says otherwise.
            </p>
          </Callout>

          <p>
            <strong>Task-KSA analysis</strong> — glossary: <em>involves generating a list of critical job tasks,
            and the KSAOs needed to do them</em>, clearly linked to the job. It is{' '}
            <strong>commonly used in US government agencies</strong>, with guidelines published by the{' '}
            <strong>U.S. Office of Personnel Management (2019)</strong>.
          </p>

          <Callout kind="danger" title="The task statement formula — write it down">
            <div className="bg-slate-100 rounded p-3 font-mono text-sm text-center text-slate-900">
              ACTION VERB — OBJECT — HOW / USING WHAT EQUIPMENT — PURPOSE
            </div>
            <p className="mt-2">
              Carpenter example: <strong>&ldquo;Measures</strong> (action verb) <strong>doorway</strong> (object){' '}
              <strong>using tape measure</strong> (how) <strong>to properly install door</strong> (purpose).&rdquo;
            </p>
          </Callout>

          <p>
            <strong>In its simplest form</strong>, task-KSA analysis generates a list of critical tasks and the
            KSAOs needed to do them through <strong>observations by the job analyst and SME interviews</strong>,
            documenting in the interviews that the KSAOs really are linked to the tasks. The analyst then compiles
            a list of tasks and KSAOs. <strong>If there are only a few SMEs available, the process often stops
            here</strong> (Morgeson et al., 2019). Larger SME pools make interviewing everyone cumbersome — but
            they also create the opportunity to further document the list through surveys.
          </p>
        </>
      )
    },

    // ------------------------------------------------------------------ 7
    {
      id: 'criticality-surveys',
      title: 'Criticality Surveys & the Mean/SD Decision Rule',
      subtitle: 'Task criticality, KSA criticality, and how tasks get dropped',
      images: [
        {
          src: `${IMG}/03e_fig3-5_task_criticality_form.png`,
          alt: 'Figure 3.5: a hypothetical task criticality rating form for the job of college professor, with two 1-5 rating columns — how important the task is, and how much time is spent on it relative to others — across 89 numbered job tasks.',
          caption: 'Figure 3.5 — A hypothetical task criticality rating form (importance and time-spent ratings) for a college professor.'
        },
        {
          src: `${IMG}/03f_fig3-6_task_importance_stats.png`,
          alt: 'Figure 3.6: means and standard deviations for the importance ratings of each job task from 50 professors, showing Task 7 with mean 4.8 but SD 1.41 and Task 88 with mean 3.4 and SD 0.91.',
          caption: 'Figure 3.6 — Means and SDs for task importance ratings (50 professors). Task 7 fails on SD; Task 88 fails on mean.'
        },
        {
          src: `${IMG}/03g_fig3-7_ksa_criticality_form.png`,
          alt: 'Figure 3.7: a hypothetical KSA criticality rating form for the job of college professor with three 1-5 rating columns — importance, time spent using the KSAO, and degree to which possessing it differentiates good from poor performance.',
          caption: 'Figure 3.7 — A hypothetical KSA criticality rating form, with THREE rating scales.'
        }
      ],
      content: (
        <>
          <p>
            <strong>Criticality</strong> — glossary: <em>how important a task is to job performance, typically in
            terms of importance to the job or relative time spent on the job.</em> The chapter notes other
            criticality measures are sometimes used, such as <strong>whether the task needs to be performed the
            first day on the job</strong> (i.e., is it needed at time of hire).
          </p>

          <Callout kind="warn" title="Task surveys are long — and that has consequences">
            Task surveys can be <strong>quite long, commonly over 100 tasks</strong>. SMEs must make a lot of
            ratings, <strong>sometimes leading to fatigue and decreased motivation</strong> — which is exactly why
            the carelessness index exists (see the data-quality block).
          </Callout>

          <Callout kind="danger" title="The two-part decision rule — the most testable procedure in Chapter 3">
            <p className="mb-2">
              You want to be sure that <strong>(1) all identified tasks really are critical to the job</strong>{' '}
              and <strong>(2) the SMEs generally agree on their ratings</strong> (Gatewood et al., 2018). So you
              compute two simple statistics per task:
            </p>
            <Table
              headers={['Statistic', 'What it tells you', 'The cut-off in the chapter’s example', 'Drop the task if…']}
              rows={[
                [
                  <strong key="m">MEAN SME rating</strong>,
                  'Whether the ratings are high enough — i.e., is the task actually important?',
                  'Must be ABOVE 4.00 on a 5-point scale',
                  'Mean is LOW (below 4.00)'
                ],
                [
                  <strong key="s">STANDARD DEVIATION</strong>,
                  'Whether SMEs AGREE. Disagreement shows up as a high SD.',
                  'Must be BELOW 1.00',
                  'SD is HIGH (above 1.00)'
                ]
              ]}
            />
            <p className="mt-2 text-sm">
              <strong>The job analyst usually determines in advance</strong> the mean and SD that will be required
              to retain a task.
            </p>
          </Callout>

          <Card title="Figure 3.6: the two tasks that get dropped (50 professors)">
            <Table
              headers={['Task', 'Mean', 'SD', 'Verdict']}
              rows={[
                ['1. Develops course syllabus for students', '4.5', '0.9', 'Retain'],
                ['2. Writes notes on course materials', '4.9', '0.2', 'Retain'],
                ['3. Writes test items', '4.8', '0.32', 'Retain'],
                [
                  <strong key="7">7. Completes paperwork regarding research grants</strong>,
                  <strong key="7m">4.8</strong>,
                  <strong key="7s">1.41</strong>,
                  <strong key="7v">DROP — high mean but SD over 1.00, so SMEs DISAGREE about its importance</strong>
                ],
                ['9. Generates new knowledge via own research', '4.8', '.22', 'Retain'],
                [
                  <strong key="88">88. Keeps desk and office tidy</strong>,
                  <strong key="88m">3.4</strong>,
                  <strong key="88s">0.91</strong>,
                  <strong key="88v">DROP — low mean (under 4.00), so professors do not think it is important</strong>
                ],
                ['89. Attends faculty meetings', '4.1', '0.89', 'Retain']
              ]}
            />
          </Card>

          <Callout kind="info" title="KSA criticality — same logic, THREE scales">
            KSAO criticality is assessed <strong>through another criticality survey, analyzed the same way</strong>{' '}
            (retain high mean, low SD). But the KSAO form in Figure 3.7 uses <strong>three</strong> rating scales
            rather than the task form&rsquo;s two:
            <ol className="list-decimal pl-5 mt-1 space-y-1">
              <li>How <strong>important</strong> is this KSAO for the job?</li>
              <li>How much <strong>time is spent using</strong> this KSAO relative to others?</li>
              <li>
                To what degree does possessing this KSAO <strong>differentiate good from poor performance</strong>?
              </li>
            </ol>
          </Callout>
        </>
      )
    },

    // ------------------------------------------------------------------ 8
    {
      id: 'linkage-survey',
      title: 'Task-KSA Linkage Survey & the Full Process',
      subtitle: 'The final documentation step, and the summary flow (Figure 3.9)',
      images: [
        {
          src: `${IMG}/03h_fig3-8_task_ksa_linkage_form.png`,
          alt: 'Figure 3.8: a hypothetical task-KSA linkage rating matrix for the job of college professor, with job tasks down the left and KSAs across the top, each cell holding a 1-5 rating of how important that KSA is for performing that task.',
          caption: 'Figure 3.8 — A task-KSA linkage rating form. Scale: 5 = Essential, 4 = Very important, 3 = Important, 2 = Moderately important, 1 = Not important.'
        },
        {
          src: `${IMG}/03i_fig3-9_task_ksa_process_summary.png`,
          alt: 'Figure 3.9: a five-step flow — assemble list of tasks and KSAOs; conduct task and KSAO criticality survey; drop tasks and KSAOs with low mean and high standard deviation; conduct linkage survey; determine final list of critical tasks and KSAOs.',
          caption: 'Figure 3.9 — Summary of the task-KSA process, start to finish.'
        }
      ],
      content: (
        <>
          <p>
            <strong>Task-KSA linkage survey</strong> — glossary: <em>a step in the task-KSA analysis in which SMEs
            document the degree to which the KSAOs really are needed to do the tasks</em> (Gatewood et al., 2018).
          </p>

          <Callout kind="danger" title="Three details the exam can hang a question on">
            <ol className="list-decimal pl-5 space-y-1">
              <li>
                For each critical job task, <strong>a NEW GROUP of SMEs</strong> rates how important each KSAO is
                for that task.
              </li>
              <li>
                In the end, <strong>you want all KSAs to be linked to at least ONE critical job task</strong>.
              </li>
              <li>
                <strong>Any KSAOs NOT linked by the SMEs to a job task are DISCARDED.</strong>
              </li>
            </ol>
          </Callout>

          <Card title="Figure 3.9 — the five steps of a full task-KSA analysis">
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>
                <strong>Assemble list of tasks and KSAOs</strong> — from past job analyses, interviews, O*NET, and
                other sources.
              </li>
              <li>
                <strong>Conduct task and KSAO criticality survey</strong> — collect ratings of importance, time
                spent, and whether the task/KSA is needed at time of hire.
              </li>
              <li>
                <strong>Drop tasks and KSAOs with low mean</strong> (not critical) <strong>and high standard
                deviation</strong> (SMEs disagree).
              </li>
              <li>
                <strong>Conduct linkage survey</strong> to assure that KSAOs are needed to perform the critical
                job tasks.
              </li>
              <li>
                <strong>Determine final list of critical tasks and KSAOs.</strong>
              </li>
            </ol>
          </Card>

          <Callout kind="tip" title="Task-KSA analysis: strengths and weaknesses">
            <div className="grid md:grid-cols-2 gap-3 mt-1">
              <div className="border border-emerald-200 bg-emerald-50 rounded p-3">
                <div className="font-semibold text-emerald-900 text-sm mb-1">Strengths</div>
                <ul className="list-disc pl-4 text-sm space-y-1">
                  <li>Rich data: <strong>hundreds of tasks</strong> plus the KSAOs needed, with robust documentation of criticality and linkage.</li>
                  <li>
                    <strong>Great for developing a selection test based on CONTENT VALIDITY</strong> (Chs. 2 and 7),
                    where you must carefully sample what the job is.
                  </li>
                  <li>Rich source for developing <strong>training</strong>.</li>
                </ul>
              </div>
              <div className="border border-red-200 bg-red-50 rounded p-3">
                <div className="font-semibold text-red-900 text-sm mb-1">Weaknesses</div>
                <ul className="list-disc pl-4 text-sm space-y-1">
                  <li>
                    <strong>Very time-consuming</strong> — the analyst must develop a CUSTOM set of tasks and KSAOs
                    for each job.
                  </li>
                  <li>
                    Provides <strong>in-depth information about a SINGLE job</strong>; it does not let you compare
                    across jobs.
                  </li>
                  <li>
                    Most commonly used <strong>when it is worthwhile</strong> — when you need detail about one job
                    with hundreds of positions in it (police officer, firefighter).
                  </li>
                </ul>
              </div>
            </div>
          </Callout>
        </>
      )
    },

    // ------------------------------------------------------------------ 9
    {
      id: 'critical-incidents',
      title: 'Critical Incidents Technique',
      subtitle: 'Flanagan (1954) — documenting situations, responses, and results',
      images: [
        {
          src: `${IMG}/03j_table3-1_critical_incidents.png`,
          alt: 'Table 3.1: two critical incidents for a customer service worker, each with the incident, an example of a positive response, and an example of a negative response — an angry customer with a defective product, and a customer demanding full-price credit for a sale item.',
          caption: 'Table 3.1 — Critical incidents for the job of customer service worker: incident, positive response, negative response.'
        }
      ],
      content: (
        <>
          <p>
            <strong>Critical incidents technique</strong> (Flanagan, 1954) — glossary:{' '}
            <em>a method of job analysis focused on documenting examples of critical situations faced by job
            incumbents, such as examples of good and poor ways to handle them, and the results.</em>
          </p>

          <Callout kind="danger" title="The three uses of critical incident data — a listing MCQ">
            The technique generates rich information usable for:
            <ol className="list-decimal pl-5 mt-1 space-y-1">
              <li>Developing <strong>interview and test questions for selection</strong>.</li>
              <li>
                Developing <strong>performance appraisal forms such as behaviorally anchored rating scales
                (BARS)</strong> — see Ch. 5.
              </li>
              <li>Developing <strong>work-related scenarios for training</strong>.</li>
            </ol>
          </Callout>

          <Card title="How you collect them">
            <p className="text-sm">
              During the job analysis interview, SMEs are asked to <strong>think about critical situations faced
              on the job</strong>, and to note <strong>examples of poor and good responses they have seen
              employees take</strong> to those incidents. This is exactly <strong>question 16 on Figure
              3.3</strong>: <em>&ldquo;What are some critical work incidents faced? What are some examples of
              ideal and poor behaviors for this position? What are some typical decisions made by a person in this
              position?&rdquo;</em>
            </p>
          </Card>

          <Callout kind="info" title="The structure of an incident">
            Each example includes <strong>(a) an important incident faced by employees, (b) positive and negative
            responses by the employee, and (c) the consequences.</strong> Table 3.1&rsquo;s angry-customer
            example: staying calm, showing concern, and solving the problem ends with a satisfied customer who
            thanks the worker; losing one&rsquo;s cool and responding rudely ends with a more upset customer asking
            for a supervisor.
          </Callout>
        </>
      )
    },

    // ------------------------------------------------------------------ 10
    {
      id: 'worker-oriented',
      title: 'Worker-Oriented Methods: PAQ, Competency Modeling, FJA & JEM',
      subtitle: 'The four alternatives to task-KSA analysis',
      content: (
        <>
          <Card title="Position Analysis Questionnaire (PAQ) — McCormick et al. (1972)">
            <p className="text-sm">
              Glossary: <em>a standardized, pre-written job analysis questionnaire containing{' '}
              <strong>195 items</strong>. The items describe a broad range of jobs and are an alternative to the
              more time-consuming method of developing a task-KSA analysis.</em> The chapter calls it{' '}
              <strong>&ldquo;off-the-shelf&rdquo;</strong>: complete a survey, which is then{' '}
              <strong>scored online</strong>.
            </p>
            <p className="text-sm mt-2">
              Because the PAQ <strong>has been around since the 1960s</strong>, there is a large accompanying
              database with <strong>hundreds of thousands of entries</strong>. When the survey is scored, the I-O
              psychologist receives <strong>not only the profile of the job but recommendations for the types of
              assessments</strong> that might be used to hire into it.
            </p>
            <Callout kind="warn" title="The PAQ recommendation caveat">
              If the database recommends a clerical ability test, that <strong>does not mean you can simply start
              using it to hire</strong>. It means you might <strong>research such tests for your job to see if
              they actually are valid predictors</strong> of job performance (Ch. 7).
            </Callout>
            <div className="grid md:grid-cols-2 gap-3 mt-3">
              <div className="border border-emerald-200 bg-emerald-50 rounded p-3">
                <div className="font-semibold text-emerald-900 text-sm mb-1">Advantages</div>
                <ul className="list-disc pl-4 text-sm space-y-1">
                  <li>Much <strong>easier</strong> — pre-made; no creating extensive task/KSAO lists from scratch.</li>
                  <li>
                    <strong>Good for COMPARING jobs.</strong> Task-KSA analysis allows detailed analysis of only
                    one or two jobs; the PAQ is good for comparing jobs to look for differences.
                  </li>
                  <li>Its database provides information about the <strong>relative value of jobs for pay decisions</strong> (job evaluation).</li>
                </ul>
              </div>
              <div className="border border-red-200 bg-red-50 rounded p-3">
                <div className="font-semibold text-red-900 text-sm mb-1">Disadvantages</div>
                <ul className="list-disc pl-4 text-sm space-y-1">
                  <li>
                    <strong>Does not provide great detail</strong> about jobs — it uses 195 generic descriptors.
                  </li>
                  <li>
                    Requires a <strong>fairly high reading level (specifically, COLLEGE level)</strong>, so you
                    cannot simply hand it to SMEs — <strong>the job analyst must complete it after interviewing
                    SMEs.</strong>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card title="Competency modeling">
            <p className="text-sm">
              Glossary: <em>a method of job analysis that involves describing the general characteristics needed
              in jobs in a company, especially within a series of jobs or across a range of jobs. This often
              includes the company values or mission statement.</em> Its popularity has grown{' '}
              <strong>over the last couple of decades</strong> (Shippmann et al., 2000), from large corporations
              to government agencies. Models may be built for a specific organization or a specific profession.
            </p>
            <Callout kind="danger" title="How competency models differ from traditional job analysis — Campion et al. (2011)">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  They <strong>include the organization&rsquo;s VALUES and MISSION</strong>. Traditional job
                  analysis just describes individual jobs and their human requirements; competency modeling adds
                  &ldquo;the flavor of the goals and values of the organization.&rdquo; A company that values
                  customers might have a competency labeled <strong>&ldquo;customer focus&rdquo;</strong> across
                  all jobs, communicating to new hires and existing employees what is expected.
                </li>
                <li>They focus on <strong>TOP performance rather than just AVERAGE performance</strong>.</li>
                <li>They focus on <strong>how competencies vary across different organizational levels</strong>.</li>
                <li>They tend to be <strong>directly linked to business strategies</strong>.</li>
                <li>
                  They may be <strong>easier to &ldquo;sell&rdquo; to top management</strong> than traditional job
                  analyses.
                </li>
              </ul>
            </Callout>
            <p className="text-sm mt-2">
              <strong>The SHRM HR Competency Model</strong> (Workplace Application box): initial input from{' '}
              <strong>over 1,000 HR professionals</strong> worldwide, followed by a survey of{' '}
              <strong>over 32,000 respondents</strong>, yielding a model of <strong>nine competencies</strong>{' '}
              required for effectiveness in HR. Notably, it was developed with input from I-O psychologists —
              specifically the <strong>SIOP Taskforce on Competency Modeling</strong>.
            </p>
          </Card>

          <Table
            headers={['Other method', 'Focus', 'Trade-off']}
            rows={[
              [
                <strong key="f">Functional job analysis (FJA) — Fine (1988)</strong>,
                'Built on the premise that all jobs require workers to deal with PEOPLE, DATA, and THINGS. Tasks are specified to include who performs the task, what action is performed, what the result is, what tools/equipment are used, and what procedures and instructions are followed. (Glossary: focuses on the purpose or FUNCTIONS of the job as opposed to the actual tasks being performed.)',
                'Provides excellent detail — but requires a good bit of work from a WELL-TRAINED job analyst.'
              ],
              [
                <strong key="j">Job element method (JEM) — Primoff (1975)</strong>,
                'A WORKER-ORIENTED method designed to specify the worker characteristics needed to do a job. Elements are identified and then broken into SUBELEMENTS. Barista example: element = "ability to make coffee drinks"; subelements = "finding out what the customer wants," "estimating the heat of coffee and milk," "understanding the equipment."',
                'Much more focused on worker characteristics, but LARGELY SKIPS the explicit definition of job tasks — so it may be less suitable when you want detail about what is actually done on the job.'
              ]
            ]}
          />
        </>
      )
    },

    // ------------------------------------------------------------------ 11
    {
      id: 'data-quality',
      title: 'Assuring the Quality of Job Analysis Data',
      subtitle: 'Reliability, the carelessness index, and choosing the right SMEs',
      images: [
        {
          src: `${IMG}/03k_fig3-10_carelessness_items.png`,
          alt: 'Figure 3.10: ten sample job tasks for a college professor including two bogus items — item 4, "Encapsulates rigorous metallurgical characters," and item 8, "Changes hand towels in campus restrooms."',
          caption: 'Figure 3.10 — Sample professor job tasks including carelessness items. Items 4 and 8 are bogus.'
        }
      ],
      content: (
        <>
          <Callout kind="info" title="The accuracy problem, stated honestly">
            <strong>Good news:</strong> because job analyses are based on the judgments of SMEs — experts on the
            job — one can argue that job analysis data do, at least to some extent, have{' '}
            <strong>content validity</strong> (Ch. 2).{' '}
            <strong>Bad news:</strong> the data come from <strong>subjective judgments</strong>, and{' '}
            <strong>we do not have any objective measures to tie job analysis data to</strong>.
          </Callout>

          <p>
            <strong>The workaround.</strong> Since there is no standard to compare against, assessing validity
            against a criterion is difficult. But recall that <strong>reliability is a necessary condition to show
            validity</strong> (Ch. 2). So the field demonstrates reliability instead —{' '}
            <strong>typically through interrater reliability or agreement</strong> (DuVernet et al., 2015). If
            SMEs generally agree in their survey ratings, that is a good sign the data are reliable and more likely
            valid as well.
          </p>

          <Callout kind="danger" title="The carelessness index (Green & Stutzman, 1986)">
            <strong>Glossary:</strong> <em>a method for detecting whether SMEs are paying attention. These consist
            of bogus or nonsensical questions throughout a survey, which if endorsed, indicate that the SME is
            being careless.</em>
            <p className="mt-2">
              The items are <strong>either nonsensical or have nothing to do with the job</strong>, and are{' '}
              <strong>scattered throughout the survey</strong>. If an SME endorses too many of them as part of
              their job, their <strong>data should be removed from further analysis</strong>.
            </p>
            <p className="mt-2">
              Figure 3.10&rsquo;s two bogus items for the professor job:{' '}
              <strong>Item 4, &ldquo;Encapsulates rigorous metallurgical characters&rdquo;</strong> (nonsense) and{' '}
              <strong>Item 8, &ldquo;Changes hand towels in campus restrooms&rdquo;</strong> (clearly not part of a
              professor&rsquo;s job).
            </p>
          </Callout>

          <Card title="Who are the best SMEs? — four considerations">
            <Table
              headers={['Consideration', 'Does it change job analysis DATA?', 'Why it matters anyway']}
              rows={[
                [
                  <strong key="d">Demographics (gender, ethnicity)</strong>,
                  <strong key="dn">"Generally no."</strong>,
                  'People give relatively similar job analysis data regardless of gender or ethnic background, or differences are fairly small (DuVernet et al., 2015). BUT representation still matters for two reasons: (1) US COURTS have indicated SME samples should represent the makeup of the organization; (2) inclusion — the police-sergeant example, where sampling mostly male sergeants for a promotional test could shut female sergeants out, create perceptions the test is "biased in favor of men," and cause resentment. Sanchez & Levine (2012) suggest looking at SMEs’ SOCIAL OR PROFESSIONAL IDENTITIES rather than demographics.'
                ],
                [
                  <strong key="e">Experience</strong>,
                  <strong key="ey">YES — research shows people of different experience levels may give different types of job analysis data.</strong>,
                  'The firefighter example cuts both ways: a NEWER worker has standard tasks uppermost in mind but has not learned all the tricks; a MORE EXPERIENCED worker knows the tricks of the trade but may be LESS ABLE TO ARTICULATE aspects of the work because they are "second nature." The authors report experienced employees skipping obvious tasks and saying, "Well of course I do that — it’s so obvious I forgot to mention it." (Sanchez et al., 1998; Tross & Maurer, 2000.)'
                ],
                [
                  <strong key="p">Job performance</strong>,
                  <strong key="pn">NOT CONSISTENTLY shown to affect job analysis results</strong>,
                  'Some research suggests it might (Sanchez et al., 1998), but it has not been consistently demonstrated (Conley & Sackett, 1987; Wexley & Silverman, 1978). Still, including the MOST RESPECTED SMEs provides LEGITIMACY: sampling only sergeants known to be poor supervisors or with disciplinary problems would destroy the job analysis’s credibility among officers.'
                ],
                [
                  <strong key="i">Incumbents vs. others</strong>,
                  <strong key="iy">YES</strong>,
                  'Dierdorff & Wilson (2003) found in a meta-analysis that job analysis information from INCUMBENTS may be LESS RELIABLE than information from JOB ANALYSTS OR TECHNICAL EXPERTS. Counterpoint: lower reliability (rater disagreement) may merely indicate the job IS DONE DIFFERENTLY by different employees with the same job title (Sanchez & Levine, 2012).'
                ]
              ]}
            />
          </Card>

          <Callout kind="danger" title="Tasks vs. KSAs — which data are more error-prone?">
            <p className="mb-2">
              <strong>Tasks are more concrete; KSAs are more abstract.</strong> Tasks are definite behaviors SMEs
              perform all day and watch colleagues perform. KSAs are <strong>not actual behaviors</strong> but the
              characteristics a person is <em>presumed</em> to need — <strong>not easily observable, requiring
              INFERENCES</strong>. The police-sergeant contrast: the task &ldquo;Completes required reports and
              paperwork regarding police officers&rdquo; is observed constantly; the KSA &ldquo;Knowledge of
              government personnel policies&rdquo; must be inferred.
            </p>
            <Table
              headers={['Finding', 'Source']}
              rows={[
                ['KSA ratings showed LOWER RELIABILITY than task ratings', 'Dierdorff & Morgeson (2009)'],
                ['KSA ratings were MORE LIKELY TO BE INFLATED than task ratings', 'Morgeson et al. (2004)'],
                ['Both findings confirmed meta-analytically', 'DuVernet et al. (2015)']
              ]}
            />
            <p className="mt-2 text-sm">
              <strong>But the authors do NOT recommend dropping KSAOs.</strong> KSAOs are very important to
              understanding what personal characteristics a person must possess. The findings just mean{' '}
              <strong>be especially careful in developing KSAO statements that are precise and not too
              broad</strong>, and careful in interpreting data based on them.
            </p>
          </Callout>

          <Card title="Training SMEs to give better ratings">
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>
                <strong>Remove cognitive load</strong> and give SMEs sufficient time — e.g., have them attend a
                job analysis session <strong>during work hours</strong> rather than just mailing a form. (The
                authors note that mailing questionnaires <strong>often leads to low response rates</strong>,
                because completing one is not a lot of fun.)
              </li>
              <li>Provide some <strong>incentive</strong> for SMEs who complete surveys.</li>
              <li>
                <strong>Aguinis et al. (2009)</strong>: providing SMEs with training{' '}
                <strong>reduced the correlation between SMEs&rsquo; OWN personality characteristics and the
                ratings they gave for a job&rsquo;s personality requirements</strong> — i.e., it reduced projection.
                More research is needed on what kind of training is best.
              </li>
            </ul>
          </Card>
        </>
      )
    },

    // ------------------------------------------------------------------ 12
    {
      id: 'job-evaluation',
      title: 'Job Evaluation: Job Analysis for Pay Structures',
      subtitle: 'Internal vs. external equity, compensable factors, points, and comparable worth',
      images: [
        {
          src: `${IMG}/03l_fig3-11_job_evaluation_points.png`,
          alt: 'Figure 3.11: four boxes showing point values for hypothetical jobs — Manager 952 points, Engineer 750 points, Administrative Assistant 350 points, Truck Driver 325 points.',
          caption: 'Figure 3.11 — Point values as determined for four hypothetical jobs within an organization.'
        }
      ],
      content: (
        <>
          <p>
            <strong>Compensation</strong> — glossary: <em>involves setting pay levels within an organization.</em>{' '}
            <strong>Job evaluation</strong> — <em>a particular type of job analysis, used to determine the relative
            value that jobs have within an organization</em> (&ldquo;who makes more than whom&rdquo;).
          </p>

          <Callout kind="danger" title="Internal vs. external equity — the core distinction">
            <Table
              headers={['', 'Definition', 'Determined by']}
              rows={[
                [
                  <strong key="i">Internal equity</strong>,
                  'A key goal of job evaluation: assuring fairness of RELATIVE pay values WITHIN the organization.',
                  'The job evaluation itself (points based on compensable factors).'
                ],
                [
                  <strong key="e">External equity</strong>,
                  'Assessment of fair compensation in relation to MARKET CONDITIONS for a particular job. Important for ATTRACTING AND RETAINING the best talent.',
                  'Outside market forces, assessed through SALARY SURVEYS.'
                ]
              ]}
            />
            <p className="mt-2 text-sm">
              <strong>Job evaluation assures internal equity; actual pay levels are then largely determined by
              outside market forces (external equity).</strong> Note the tie-back to Ch. 2: pay fairness was one of
              the original applications of <strong>equity theory</strong> (Ch. 9).
            </p>
          </Callout>

          <Card title="The three compensable factors">
            <p className="text-sm mb-2">
              A common approach assesses each job&rsquo;s relative value in <strong>points</strong>, determined by
              pre-determined criteria called <strong>compensable factors</strong>:
            </p>
            <Table
              headers={['Compensable factor', 'Logic', 'Chapter’s example']}
              rows={[
                ['Working conditions', 'Tough working conditions normally command more pay.', 'A firefighter is paid more because of dangerous and rough working conditions.'],
                ['Experience or knowledge required', 'Greater experience and knowledge requirements command more pay.', 'A research scientist gets more pay because of the technical knowledge required.'],
                ['Level of responsibility', 'Jobs with a lot of responsibility get paid more than those with less.', 'A manager supervising a dozen employees gets paid more than a worker with no supervisory responsibilities.']
              ]}
            />
          </Card>

          <Callout kind="warn" title="Work the Figure 3.11 arithmetic — the exam may ask you to reason from points">
            <Table
              headers={['Job', 'Points', 'Implied relationship']}
              rows={[
                ['Manager', '952', 'Should make approximately THREE TIMES as much as administrative assistants and truck drivers'],
                ['Engineer', '750', 'Administrative assistants and truck drivers should make about HALF as much as engineers'],
                ['Administrative Assistant', '350', '—'],
                ['Truck Driver', '325', '—']
              ]}
            />
            <p className="mt-2 text-sm">
              <strong>Extrapolation example:</strong> if the salary survey showed engineers are paid about{' '}
              <strong>$150,000</strong> per year, we could extrapolate that managers should make approximately{' '}
              <strong>$200,000</strong>.
            </p>
          </Callout>

          <Card title="Salary surveys and benchmark jobs">
            <p className="text-sm">
              Points alone tell you only relative value, not what people should be <em>paid</em>. External equity
              is assessed through <strong>salary surveys of the market</strong>, which may be{' '}
              <strong>conducted by the organization, obtained from government data, or purchased from a consulting
              firm</strong>. Since a company may lack resources to survey every job, organizations often survey
              only their <strong>most essential jobs — called BENCHMARK JOBS</strong> — and{' '}
              <strong>extrapolate</strong> pay for the others.
            </p>
          </Card>

          <Callout kind="danger" title="The reconciliation problem">
            <strong>Market rates for jobs may not match the relative values determined through job
            evaluation.</strong> Examples: engineers&rsquo; market value could mean salary surveys indicate they
            should be paid <em>more than a supervisor at the next level above them</em>; or the market might pay
            administrative assistants <em>less than</em> truck drivers. The organization must find some way to{' '}
            <strong>reconcile job-evaluation value with external market forces</strong>.
          </Callout>

          <Card title="Comparable worth">
            <p className="text-sm">
              Glossary: <em>commonly discussed in terms of gender differences. Points to differences in pay for
              typically male versus typically female jobs based on job evaluation and market value.</em>
            </p>
            <Callout kind="warn" title="The distinction you must not blur">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Comparable worth</strong> = pay differences for <strong>DIFFERENT jobs</strong>{' '}
                  traditionally associated with men (truck driver) versus women (administrative assistant), where
                  job evaluation shows them <em>worth the same</em> to the organization but the market pays the
                  female-typed job less.
                </li>
                <li>
                  <strong>Equal pay for the same work</strong> = men and women{' '}
                  <strong>WITHIN the SAME profession</strong> (e.g., male and female college professors) being paid
                  differently — an issue for many professions from stockbrokers (Madden, 2012) to movie stars (De
                  Pater et al., 2014). <strong>This is a different issue.</strong>
                </li>
              </ul>
            </Callout>
            <p className="text-sm mt-2">
              <strong>Status of the issue:</strong> comparable worth <strong>gained some traction in the
              1980s</strong> but has <strong>to some extent died down</strong>, because the courts have generally
              come down on the side of <strong>organizations needing to use market forces to set pay</strong>{' '}
              (Killingsworth, 2002). There is also greater fluidity today in the opportunities open to men and
              women in different jobs than at any other point in history.
            </p>
          </Card>
        </>
      )
    },

    // ------------------------------------------------------------------ 13
    {
      id: 'legal-global-current',
      title: 'Legal, Global & Current Issues',
      subtitle: 'Uniform Guidelines requirements, multinational consistency, and "work analysis"',
      content: (
        <>
          <Callout kind="danger" title="Legal Issues — the clearest legal requirement in the chapter">
            <p>
              <strong>Job analyses must be done as part of the validation of a selection system</strong> (Chs. 6
              and 7). Per the <strong>Uniform Guidelines on Employee Selection Procedures</strong>, US selection
              systems <strong>should be based on a job analysis in order to be legally defensible</strong>. And
              the analysis must be <strong>detailed enough</strong> to give the specific information needed to
              develop selection procedures. Three specific requirements the chapter names (Morgeson et al., 2019;
              Thompson &amp; Thompson, 1982):
            </p>
            <ol className="list-decimal pl-5 mt-2 space-y-1">
              <li>The job analysis used for developing selection tests must be <strong>reported in writing</strong>.</li>
              <li>The <strong>procedure used must be clearly described</strong>.</li>
              <li>A <strong>wide variety of sources</strong> should be used in the analysis.</li>
            </ol>
          </Callout>

          <Card title="Global Implications — multinational consistency">
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>
                <strong>Job titles may not mean the same thing across countries.</strong> Same title, different
                responsibilities — due to <strong>cultural differences</strong>, or because global organizations
                may be <strong>the result of mergers</strong> of different organizations. The challenge is
                assuring a company&rsquo;s titles mean the same thing worldwide.
              </li>
              <li>
                <strong>Competency modeling cuts both ways.</strong> Because it is highly dependent on the culture
                and values of the organization, it is <strong>particularly susceptible to cultural
                differences</strong> from one part of a company to another — creating implementation headaches.{' '}
                <em>But</em> because it shows how organizational goals and values are reflected in the job, it{' '}
                <strong>may be especially useful for TRANSMITTING those goals and values</strong> across the
                company worldwide.
              </li>
            </ol>
            <p className="text-sm mt-2">
              <strong>Example:</strong> the <strong>World Health Organization</strong> (a UN agency focused on
              global public health) produced a <strong>global competency model (2020)</strong> because its
              employees must operate in diverse cultures worldwide. Sample competencies:{' '}
              <em>respecting and promoting individual and cultural differences</em> and{' '}
              <em>managing yourself</em>.
            </p>
          </Card>

          <Card title="Current Workplace Issues — from job analysis to work analysis">
            <p className="text-sm">
              Traditional approaches date from decades when <strong>jobs were more finite and changed very
              slowly</strong>. Today jobs <strong>change quickly and are much more fluid</strong>, prompting a move
              toward the term <strong>work analysis</strong> — glossary:{' '}
              <em>the term acknowledging that jobs are quickly changing and more fluid in today&rsquo;s
              market</em> (Sanchez &amp; Levine, 2012). Morgeson and Dierdorff (2011) argue that rather than
              thinking about single jobs with static tasks, we should think more broadly of{' '}
              <strong>work roles</strong> — acknowledging that work changes over time and that workers do not work
              in isolation but are <strong>integrated into large teams and contexts</strong>.
            </p>
            <p className="text-sm mt-2">
              <strong>Cognitive task analysis</strong> — glossary: <em>a newer approach that goes beyond
              traditional task analysis by focusing specifically on the COGNITIVE PROCESSES involved in doing the
              job.</em> Barista contrast: rather than &ldquo;prepare coffee drinks,&rdquo; it targets{' '}
              &ldquo;calculate the heat of steamed milk&rdquo; and &ldquo;remain aware of own emotions under
              stress.&rdquo; It is <strong>time-consuming and expensive</strong>, but <strong>may be worthwhile
              for high-risk, critical jobs</strong> — the textbook names <strong>air traffic controller</strong> as
              a good candidate. There is also increased interest in explicitly assessing{' '}
              <strong>personality traits required for the job</strong> (Raymark et al., 1997), likely because of
              interest in personality&rsquo;s effect on performance since Barrick &amp; Mount (1991).
            </p>
          </Card>

          <Card title="Current Research Issues — the future of job analysis">
            <p className="text-sm">
              Interest in job analysis research <strong>seems to be falling off in top I-O journals</strong>{' '}
              (Morgeson &amp; Dierdorff, 2011). Sanchez and Levine (2012) argue this is{' '}
              <strong>not because job analysis is unimportant</strong>, but because{' '}
              <strong>job analysis is not usually an end in itself</strong> — it is done in support of other, more
              &ldquo;important&rdquo; functions such as selection or training. Many best practices are now
              well-established, but issues remain, and <strong>the use of technology in job analysis is ripe for
              research</strong>.
            </p>
            <Callout kind="info" title="Technology & I-O: monitored data for job analysis">
              Employers increasingly collect <strong>electronic data — keyboard strokes, wearable technology such
              as electronic badges</strong> showing how frequently a supervisor interacts with subordinates. In a
              sense this is <strong>another way of observing employees</strong>. The upside:{' '}
              <strong>more OBJECTIVE information</strong>, showing what incumbents <em>actually do</em> rather than
              what they <em>say</em> they do. The downsides: workers perceiving it as an{' '}
              <strong>invasion of privacy</strong>, <strong>legal and ethical issues around data
              security</strong>, and the <strong>stress of feeling they are always on</strong>. It would be a
              fairly large shift from how organizations have done job analyses for the last 100 years.
            </Callout>
          </Card>
        </>
      )
    }
  ],

  // ==================================================================== KEY REVIEW
  keyReview: {
    summary: {
      title: 'Chapter 3 — Comprehensive Summary',
      wordCount: 1150,
      paragraphs: [
        'Job analysis is the systematic process that identifies a job’s tasks and responsibilities, the knowledge, skills, abilities, and other characteristics (KSAOs) required to perform it, and the critical incidents faced on the job. It has been described as the basis of other human resource functions, and the reason is structural rather than rhetorical: virtually every downstream activity in industrial psychology presupposes an accurate description of what a job actually involves. Job analysis furnishes the raw material for job descriptions and job specifications; it tells recruiters what qualifications to advertise for and thus what applicant pool to build; it is required to choose and develop valid selection procedures, and under the Uniform Guidelines on Employee Selection Procedures a legally defensible US selection system must rest on one; it supplies the basis for strong criterion measures of job performance, which in turn determine whether selection procedures are actually producing better performers; it grounds performance appraisals, which research suggests are less susceptible to legal challenge when job-analysis based; it is a critical part of a thorough training needs assessment, since no one can train employees effectively without knowing what knowledge and skills the job demands; it informs job design, the systematic analysis of how work is organized; and in the specialized form of job evaluation it determines the relative pay value of jobs. Three related documents should be kept distinct: the job analysis itself is a deep analytical process that may describe hundreds of tasks; the job description is a simpler one- or two-page summary of main responsibilities often given to employees; and job specifications are a brief overview of the characteristics needed, including minimum qualifications.',

        'The vocabulary of job analysis is precise. A task is a basic element used to describe a job, and a large set of tasks constitutes the job; tasks are typically phrased as an action verb, an object, and a purpose, as in "answers telephone calls to resolve customers’ issues and concerns." Tasks that serve a similar purpose are grouped into functional categories, sometimes called responsibilities. Where tasks describe the job, KSAs describe what the employee needs to do it: knowledge is something learnable from a book, a skill is something one can learn how to do, and an ability is something more innate that the person brings with them. The textbook concedes that these distinctions are difficult and that it may be easier to think of them collectively as what a person needs to perform the tasks; it also notes that many I-O psychologists prefer KSAOs, adding "other characteristics" such as personality, and that KSA and KSAO are used interchangeably. Subject matter experts, or SMEs, are the job experts from whom information is gathered — typically incumbents, who actually do the job and know it most intimately, and supervisors, who better understand how the job fits into the wider organization; the two supply complementary perspectives. The job analyst conducting the process is usually an I-O psychologist or an HR specialist.',

        'Before collecting new data, an analyst consults existing sources. Prior job analyses within the company provide a starting point, and analyses of similar jobs from other organizations are available — uncommon in the competitive private sector but routine in the public sector, where one city might share a firefighter analysis with another of similar size and building stock. Two government sources matter historically. The Dictionary of Occupational Titles, created under the Roosevelt Administration during the Great Depression to support businesses with job information, eventually grew to the size of two large telephone books containing thousands of short job descriptions covering nearly every occupation; its final edition appeared in 1991. Its limitations — paper only, static, difficult to update, and thin on detail — prompted the Department of Labor to develop the Occupational Information Network, or O*NET, a free online database whose content model covers worker characteristics such as abilities, worker requirements such as knowledge and skills, experience requirements such as licenses, occupational requirements such as work activities, workforce characteristics such as labor-market outlook, and occupation-specific information such as tasks and tools. O*NET data come from surveys of employees around the United States, so it describes what the average employee in an occupation does. Critically, neither source constitutes a job analysis of a particular organization’s job: both are starting points only.',

        'Data collection proceeds through several methods, none of which is best. Observation is among the most basic and is especially useful for technical jobs where an interview alone would leave the analyst unable to follow the terminology, as in firefighting; the ride-along is a variant suited to fieldwork such as police patrol. The job analysis interview is perhaps the most common method and produces rich information about responsibilities, tasks, KSAs, critical incidents, and qualifications; Figure 3.3 supplies eighteen sample questions. Focus groups let SMEs build on one another’s accounts, but group settings can suppress candor or induce SMEs to tailor answers, as when rank differences in a police department lead an officer simply to agree with their supervisor. Job analysis surveys become necessary in organizations with thousands of employees in a single job type and underlie both task-KSA analysis and the PAQ; the essential requirement is that the sample adequately represent employees by gender and ethnicity and across shifts and geographic areas. Morgeson and Campion identified biases affecting method quality, from impression management to cognitive overload — the latter being a particular hazard of very long task questionnaires. Preparing SMEs is itself consequential: without an explanation of purpose, employees may find the process threatening, may treat it carelessly, may invent sinister motives, and may allow morale to suffer or even sabotage the effort. Research indicates SMEs give more reliable data when they believe the purpose is relevant to them, and that purpose distorts ratings — SMEs tend to inflate ratings when the analysis is for selection.',

        'Frameworks divide into work-oriented methods, whose primary unit of analysis is the job, and worker-oriented methods, which focus on employee characteristics. Task-KSA analysis, common in US government agencies and guided by the Office of Personnel Management, generates a list of critical tasks phrased as action verb, object, how or with what equipment, and purpose, along with the KSAOs needed to perform them. With few SMEs the process may stop after interviews; with many, criticality surveys follow. SMEs rate each task for importance and relative time spent, and the analyst computes a mean and standard deviation for each, dropping tasks whose mean falls below a threshold — 4.00 on a five-point scale in the chapter’s example — because they are not important, and tasks whose standard deviation exceeds a threshold such as 1.00 because SMEs disagree. In the professor example, "completes paperwork regarding research grants" earns a high mean of 4.8 but a standard deviation of 1.41 and is dropped for disagreement, while "keeps desk and office tidy" earns 3.4 and is dropped for unimportance. KSAO criticality is assessed the same way, though the KSAO form adds a third scale asking how much possessing the KSAO differentiates good from poor performance. A task-KSA linkage survey then has a new group of SMEs rate how important each KSAO is for each critical task; every KSA should link to at least one task, and unlinked KSAOs are discarded. The result is rich documentation ideal for building content-valid selection tests and training, at the cost of being very time-consuming and yielding depth on only a single job — which is why it is reserved for jobs with many positions, such as police officer or firefighter. The critical incidents technique, from Flanagan, documents critical situations, good and poor responses, and consequences, and its output supports selection questions, behaviorally anchored rating scales for appraisal, and training scenarios.',

        'Among worker-oriented methods, the Position Analysis Questionnaire is a standardized, off-the-shelf instrument of 195 items covering a broad range of jobs, scored online against a database accumulated since the 1960s containing hundreds of thousands of entries. It returns both a job profile and recommendations about assessment types — recommendations that must still be validated locally before use — and can inform job point values for pay planning. Its virtues are speed and cross-job comparability; its drawbacks are limited detail and a college-level reading requirement that means the job analyst, not the SME, completes it after interviewing. Competency modeling, increasingly popular over recent decades, describes general person characteristics needed across a series or range of jobs and, distinctively, incorporates organizational values and mission — a company that prizes customers may define a "customer focus" competency across all jobs. Campion and colleagues note that competency models emphasize top rather than average performance, address how competencies vary by organizational level, and link directly to business strategy, which also makes them easier to sell to senior management. SHRM’s HR competency model, built with input from over a thousand professionals and a survey of more than thirty-two thousand respondents and developed with the SIOP Taskforce on Competency Modeling, produced nine competencies. Functional job analysis holds that all jobs involve people, data, and things and specifies who performs a task, the action, the result, tools used, and procedures followed; the job element method specifies worker characteristics and breaks them into subelements but largely skips explicit task definition.',

        'Because job analysis data are subjective SME judgments with no objective standard for comparison, quality assurance relies on reliability — usually interrater agreement — as a necessary condition for validity. Carelessness indices embed bogus or nonsensical items throughout a survey; an SME endorsing too many should be removed. On SME selection, demographics generally do not change the data, but representation matters because US courts expect SME samples to reflect organizational makeup and because exclusion breeds legitimate resentment and perceptions of bias. Experience does affect the data, since newer workers hold standard tasks in mind while veterans may omit tasks that have become second nature. Job performance has not consistently been shown to affect results, though including respected SMEs lends credibility. Incumbents’ data may be less reliable than that from job analysts or technical experts, although disagreement may simply reflect genuine variation in how a job is performed. KSA ratings are less reliable and more prone to inflation than task ratings because KSAs are abstract and inferential rather than observable — a reason to write precise, narrow KSAO statements rather than to abandon them. Training SMEs, reducing cognitive load, scheduling sessions during work hours, and offering incentives all improve quality; training in particular reduces the correlation between SMEs’ own personalities and their ratings of a job’s personality requirements.',

        'Finally, job evaluation applies job analysis to compensation, determining the relative value of jobs within an organization. Its goal is internal equity — fairness of relative pay within the firm — while actual pay levels are largely set by external equity, that is, market conditions assessed through salary surveys conducted internally, obtained from government data, or purchased from consultants, often only for benchmark jobs with other pay extrapolated. Jobs receive points according to compensable factors including working conditions, required experience or knowledge, and level of responsibility, so that in the chapter’s example managers at 952 points should earn roughly three times what administrative assistants at 350 and truck drivers at 325 earn, and about a third more than engineers at 750 who command $150,000. Complications arise when market rates conflict with evaluated worth, as when engineers out-earn their supervisors. This tension underlies comparable worth, the observation that traditionally female jobs such as administrative assistant are often paid less than traditionally male jobs such as truck driver despite equivalent evaluated value — an issue distinct from equal pay for the same work within a profession, and one that gained traction in the 1980s before subsiding as courts sided with market-based pay setting. Legally, job analysis must underpin selection system validation, must be reported in writing, must have its procedure clearly described, and should draw on a wide variety of sources. Globally, identical job titles may carry different responsibilities across countries, and competency modeling is both especially vulnerable to cultural difference and especially useful for transmitting organizational values worldwide. Looking forward, the field increasingly speaks of work analysis and work roles to acknowledge fluid, team-embedded work, explores cognitive task analysis for high-risk jobs such as air traffic control, and begins to consider electronically monitored data as an objective supplement to subjective judgment, with attendant privacy, legal, and stress concerns.'
      ]
    },

    numbers: [
      { value: '195', what: 'Number of items on the Position Analysis Questionnaire (PAQ)' },
      { value: '1991', what: 'Last edition of the Dictionary of Occupational Titles (DOT)' },
      { value: '1930s', what: 'DOT origin — Roosevelt Administration, Great Depression' },
      { value: '1960s', what: 'PAQ origin (McCormick et al., 1972); database now has hundreds of thousands of entries' },
      { value: '1954', what: 'Flanagan — critical incidents technique' },
      { value: 'Mean > 4.00', what: 'Task criticality cut-off to RETAIN a task (5-point scale)' },
      { value: 'SD < 1.00', what: 'Task criticality cut-off for SME AGREEMENT to retain a task' },
      { value: '4.8 / SD 1.41', what: 'Task 7 (grant paperwork) — dropped for SME disagreement' },
      { value: '3.4 / SD 0.91', what: 'Task 88 (tidy office) — dropped for low importance' },
      { value: '50', what: 'Number of professors providing ratings in Figure 3.6' },
      { value: '100+', what: 'Typical length of a task criticality survey (source of cognitive overload)' },
      { value: '952 / 750 / 350 / 325', what: 'Job evaluation points: manager / engineer / admin assistant / truck driver' },
      { value: '$150,000 → ~$200,000', what: 'Engineer salary survey → extrapolated manager salary (Figure 3.11)' },
      { value: '1,000+ and 32,000+', what: 'SHRM competency model: initial HR professionals, then survey respondents' },
      { value: '9', what: 'Competencies in SHRM’s HR competency model' },
      { value: '3', what: 'Compensable factors: working conditions, experience/knowledge, responsibility' },
      { value: '3', what: 'Rating scales on the KSAO criticality form (task form has 2)' },
      { value: '1980s', what: 'When comparable worth gained traction (has since died down)' }
    ],

    vocab: [
      { term: 'Job analysis', tag: 'Core', tagColor: 'sky', def: 'The systematic process that helps you identify the job tasks and responsibilities, KSAOs, and critical incidents faced on the job.' },
      { term: 'Job description', tag: 'Document', def: 'An overview of a job, typically one to two pages outlining what the job entails.' },
      { term: 'Job specifications', tag: 'Document', def: 'A brief overview of the characteristics needed to do the job, including the minimum qualifications necessary.' },
      { term: 'Qualifications', tag: 'Document', def: 'The skills and experience required to do a job.' },
      { term: 'Recruitment', tag: 'HR function', tagColor: 'green', def: 'A method for increasing your applicant pool in an attempt to find the best people for the job.' },
      { term: 'Valid selection procedures', tag: 'HR function', tagColor: 'green', def: 'Methods, such as tests and interviews, which can be used to assist in hiring the best applicant for a job.' },
      { term: 'Criterion measures', tag: 'HR function', tagColor: 'green', def: 'Tools used to evaluate job performance.' },
      { term: 'Performance appraisals', tag: 'HR function', tagColor: 'green', def: 'An evaluation used by supervisors to evaluate employees’ performance.' },
      { term: 'Job design', tag: 'HR function', tagColor: 'green', def: 'A systematic analysis of the organization of work, which often includes job analysis to identify the best way to allocate various tasks and responsibilities among different jobs.' },
      { term: 'Job evaluation', tag: 'Pay', tagColor: 'amber', def: 'A particular type of job analysis, used to determine the relative value that jobs have within an organization.' },
      { term: 'Task', tag: 'Terminology', tagColor: 'blue', def: 'A basic element that can be used to describe a job. Together, a large set of tasks makes up a job. Stated as action verb, object, how/equipment, purpose.' },
      { term: 'Functional categories', tag: 'Terminology', tagColor: 'blue', def: 'A group of tasks that serve a similar purpose; sometimes said to be grouped into larger "responsibilities."' },
      { term: 'Knowledge, Skills, and Abilities (KSAs)', tag: 'Terminology', tagColor: 'blue', def: 'Used to describe the characteristics an employee needs to do the job. Knowledge is learnable (e.g., from a book); a skill is something you can learn how to do; an ability is more innate and brought to the job.' },
      { term: 'KSAOs', tag: 'Terminology', tagColor: 'blue', def: 'Knowledge, skills, abilities, and OTHER characteristics (including personality). Used interchangeably with KSAs in this textbook.' },
      { term: 'Subject matter expert (SME)', tag: 'Terminology', tagColor: 'blue', def: 'A job expert with a great deal of knowledge about and/or experience of the job — the person from whom job analysis information is obtained. Typically an incumbent or supervisor.' },
      { term: 'Incumbent', tag: 'Terminology', tagColor: 'blue', def: 'The person doing a given job — the person most familiar with the job.' },
      { term: 'Supervisors (as SMEs)', tag: 'Terminology', tagColor: 'blue', def: 'Those overseeing job incumbents; as SMEs they may have a better idea of how a given job fits into the overall organization.' },
      { term: 'Job analyst', tag: 'Terminology', tagColor: 'blue', def: 'The person conducting a job analysis — usually an I-O psychologist or HR specialist.' },
      { term: 'Dictionary of Occupational Titles (DOT)', tag: 'Source', tagColor: 'violet', def: 'Published by the US government in paper form; contains short job descriptions of nearly every job. Originated in the 1930s; last edition 1991. NOT a job analysis in itself.' },
      { term: 'Occupational Information Network (O*NET)', tag: 'Source', tagColor: 'violet', def: 'An online database developed by the US Department of Labor containing job analyses from various job titles, with information on work characteristics, requirements, and experience needed. Free online. Built from employee surveys, so it describes the AVERAGE employee.' },
      { term: 'Observations', tag: 'Method', tagColor: 'green', def: 'One of the most basic ways to learn about a job — watching incumbents and SMEs doing their job. Especially useful for technical jobs. A "ride-along" is a field variant.' },
      { term: 'Job analysis interview', tag: 'Method', tagColor: 'green', def: 'When a job analyst asks SMEs questions about job responsibilities, tasks performed, critical incidents faced, and what KSAOs, experience, and qualifications are needed.' },
      { term: 'Focus groups', tag: 'Method', tagColor: 'green', def: 'When a job analyst gathers groups of SMEs and asks structured sets of questions regarding their jobs.' },
      { term: 'Job analysis survey', tag: 'Method', tagColor: 'green', def: 'A questionnaire given to a large number of employees about the job in order to conduct the job analysis.' },
      { term: 'Work-oriented job analysis method', tag: 'Framework', tagColor: 'red', def: 'A job analysis method in which the primary unit of analysis is the CHARACTERISTICS OF THE JOB (e.g., task-KSA analysis).' },
      { term: 'Worker-oriented job analysis approaches', tag: 'Framework', tagColor: 'red', def: 'Methods of job analysis that focus on the CHARACTERISTICS OF THE EMPLOYEE — examples are the PAQ and competency modeling.' },
      { term: 'Task-KSA analysis', tag: 'Framework', tagColor: 'red', def: 'Involves generating a list of critical job tasks and the KSAOs needed to do them. Common in US government agencies; guidelines from the U.S. Office of Personnel Management.' },
      { term: 'Criticality', tag: 'Framework', tagColor: 'red', def: 'How important a task is to job performance, typically in terms of importance to the job or relative time spent on the job.' },
      { term: 'Task-KSA linkage survey', tag: 'Framework', tagColor: 'red', def: 'A step in task-KSA analysis in which SMEs document the degree to which the KSAOs really are needed to do the tasks. Unlinked KSAOs are discarded.' },
      { term: 'Critical incidents technique', tag: 'Framework', tagColor: 'red', def: 'Flanagan (1954). A method of job analysis focused on documenting examples of critical situations faced by job incumbents, examples of good and poor ways to handle them, and the results.' },
      { term: 'Position Analysis Questionnaire (PAQ)', tag: 'Framework', tagColor: 'red', def: 'A standardized, pre-written job analysis questionnaire containing 195 items describing a broad range of jobs — an alternative to the more time-consuming task-KSA analysis. Requires college-level reading, so the analyst completes it.' },
      { term: 'Competency modeling', tag: 'Framework', tagColor: 'red', def: 'A method of job analysis that describes the general characteristics needed in jobs in a company, especially within a series of jobs or across a range of jobs. Often includes the company values or mission statement.' },
      { term: 'Functional job analysis (FJA)', tag: 'Framework', tagColor: 'red', def: 'Fine (1988). Focuses on the purpose or functions of the job as opposed to the actual tasks being performed. Premised on all jobs involving people, data, and things.' },
      { term: 'Job element method (JEM)', tag: 'Framework', tagColor: 'red', def: 'Primoff (1975). A worker-oriented method specifying the worker characteristics needed, broken into elements and subelements. Largely skips explicit definition of job tasks.' },
      { term: 'Carelessness index', tag: 'Quality', tagColor: 'amber', def: 'A method for detecting whether SMEs are paying attention: bogus or nonsensical questions scattered throughout a survey which, if endorsed, indicate the SME is being careless and their data should be removed.' },
      { term: 'Compensation', tag: 'Pay', tagColor: 'amber', def: 'Involves setting pay levels within an organization.' },
      { term: 'Internal equity', tag: 'Pay', tagColor: 'amber', def: 'A key goal of job evaluation — assuring fairness of relative pay values WITHIN the organization.' },
      { term: 'External equity', tag: 'Pay', tagColor: 'amber', def: 'Assessment of fair compensation in relation to MARKET conditions for a particular job. Important for attracting and retaining the best talent.' },
      { term: 'Compensable factors', tag: 'Pay', tagColor: 'amber', def: 'Pre-determined criteria used to assign points to jobs in a job evaluation: working conditions, experience/knowledge required, and level of responsibility.' },
      { term: 'Benchmark jobs', tag: 'Pay', tagColor: 'amber', def: 'The most essential jobs, for which organizations conduct salary surveys; pay for other jobs is then extrapolated.' },
      { term: 'Comparable worth', tag: 'Pay', tagColor: 'amber', def: 'Commonly discussed in terms of gender differences. Points to differences in pay for typically male versus typically female jobs based on job evaluation and market value. DISTINCT from equal pay for the same work.' },
      { term: 'Work analysis', tag: 'Current', tagColor: 'sky', def: 'The term acknowledging that jobs are quickly changing and more fluid in today’s market.' },
      { term: 'Work roles', tag: 'Current', tagColor: 'sky', def: 'Morgeson & Dierdorff’s (2011) broader unit: acknowledges that individuals’ work changes over time and that workers are integrated into large teams and contexts.' },
      { term: 'Cognitive task analysis', tag: 'Current', tagColor: 'sky', def: 'A newer approach that goes beyond traditional task analysis by focusing specifically on the cognitive processes involved in doing the job. Time-consuming and expensive but worthwhile for high-risk, critical jobs.' }
    ],

    laws: [
      { name: 'Job analysis is the basis of other HR functions', desc: 'Morgeson & Dierdorff (2011). Recruitment, selection, criterion measures, performance appraisal, training, job design, and job evaluation all depend on it (Figure 3.1).' },
      { name: 'The legal defensibility rule', desc: 'Per the Uniform Guidelines (1978), US selection systems should be based on a job analysis to be legally defensible. It must be reported in writing, its procedure clearly described, and a wide variety of sources used.' },
      { name: 'No single method is best', desc: 'Each data collection method (observation, interview, focus group, survey) provides useful information; some combination is usually best, since each has unique advantages and biases.' },
      { name: 'The mean/SD retention rule', desc: 'Drop a task or KSAO if the mean criticality rating is LOW (not critical, e.g., below 4.00 on a 5-point scale) OR the standard deviation is HIGH (SMEs disagree, e.g., above 1.00). The analyst sets these cut-offs in advance.' },
      { name: 'Every KSA must link to at least one critical task', desc: 'The linkage survey documents that KSAOs really are needed to do the tasks. Any KSAO not linked by SMEs to a job task is discarded.' },
      { name: 'DOT and O*NET are starting points, not job analyses', desc: 'Neither tells you what a particular job is like in YOUR organization. O*NET describes what the average employee in an occupation does.' },
      { name: 'Purpose distorts ratings', desc: 'SMEs give more reliable data when they believe the purpose is relevant to them — and tend to INFLATE ratings when the job analysis is for selection (DuVernet et al., 2015).' },
      { name: 'KSAs are noisier than tasks', desc: 'KSA ratings show lower reliability (Dierdorff & Morgeson, 2009) and more inflation (Morgeson et al., 2004) than task ratings, because KSAs are abstract and require inference rather than observation.' },
      { name: 'Demographics don’t change the data — but representation still matters', desc: 'Gender and ethnicity produce similar (or only slightly different) job analysis data. Include diverse SMEs because US courts expect representative samples and because exclusion damages legitimacy — not because the data would otherwise differ.' },
      { name: 'Experience DOES change the data', desc: 'Newer employees keep standard tasks in mind; experienced ones may omit tasks that have become "second nature." Sampling across experience levels affects results.' },
      { name: 'Internal equity from evaluation, external equity from the market', desc: 'Job evaluation assures relative fairness within the firm; actual pay levels are largely determined by market forces assessed via salary surveys. Conflicts between the two must be reconciled.' },
      { name: 'Comparable worth ≠ equal pay for the same work', desc: 'Comparable worth concerns DIFFERENT jobs typed male vs. female with equal evaluated value; equal pay concerns men and women WITHIN the same profession.' }
    ],

    methods: [
      { name: 'The task statement formula', expand: 'ACTION VERB — OBJECT — HOW/EQUIPMENT — PURPOSE', desc: '"Measures (verb) doorway (object) using tape measure (how) to properly install door (purpose)."' },
      { name: 'The five-step task-KSA process', expand: 'Assemble → Criticality survey → Drop → Linkage → Final list', desc: 'Figure 3.9. Assemble tasks/KSAOs from past analyses, interviews, O*NET; survey criticality; drop low-mean/high-SD items; run linkage survey; finalize.' },
      { name: 'Low mean = not important; high SD = disagreement', expand: '', desc: 'The two ways a task fails the criticality screen. Task 7 (mean 4.8, SD 1.41) fails on SD; Task 88 (mean 3.4) fails on mean.' },
      { name: 'Work vs. Worker', expand: 'Work-oriented = the JOB; Worker-oriented = the EMPLOYEE', desc: 'Task-KSA analysis is work-oriented. PAQ, competency modeling, and JEM are worker-oriented.' },
      { name: 'Deep vs. Wide', expand: 'Task-KSA = deep on one job; PAQ = comparable across jobs', desc: 'Choose task-KSA when you need detail on one job with many positions (police, firefighter). Choose PAQ when you need to compare jobs quickly.' },
      { name: '2 vs. 3 rating scales', expand: 'Task form = importance + time spent; KSAO form adds "differentiates good from poor performance"', desc: 'A subtle contrast between Figures 3.5 and 3.7 that makes a clean MCQ.' },
      { name: 'WER', expand: 'Working conditions, Experience/knowledge, Responsibility', desc: 'The three compensable factors used to assign job evaluation points.' },
      { name: 'Critical incident anatomy', expand: 'Incident + positive response + negative response + consequences', desc: 'What each entry in a critical incidents table contains (Table 3.1).' },
      { name: 'Three uses of critical incidents', expand: 'Selection questions, BARS appraisal forms, training scenarios', desc: 'The three applications the chapter names for critical incident data.' }
    ]
  },

  // ==================================================================== QUESTIONS
  questions: [
    {
      q: 'Job analysis is defined in Chapter 3 as the systematic process that helps you identify:',
      type: 'mcq',
      choices: [
        'The relative pay value of jobs within an organization',
        'The job tasks and responsibilities, KSAOs, and critical incidents faced on the job',
        'Which employees are performing above and below expectations',
        'The organization’s mission, values, and strategic priorities'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'This is the glossary definition, with three components. Option A defines job evaluation, a particular TYPE of job analysis. Option D leans toward competency modeling.'
    },
    {
      q: 'Which document is described as the DEEPEST and most detailed, potentially describing hundreds of tasks?',
      type: 'mcq',
      choices: ['Job description', 'Job specification', 'Job analysis', 'Job posting'],
      correct: 2,
      difficulty: 'E',
      explanation: 'A job analysis implies a deep analytical process; a good one lets someone unfamiliar with the job understand it. A job description is a simpler one- to two-page document; job specifications are a brief overview of characteristics including minimum qualifications.'
    },
    {
      q: 'Which document specifically includes the MINIMUM QUALIFICATIONS needed to do a job?',
      type: 'mcq',
      choices: ['Job analysis', 'Job description', 'Job specifications', 'Competency model'],
      correct: 2,
      difficulty: 'M',
      explanation: 'Job specifications give a relatively brief overview of the characteristics needed, including the minimum qualifications. That phrase appears in the glossary definition.'
    },
    {
      q: 'Research by Feild and Holley (1982) suggests that performance appraisals based on job analysis:',
      type: 'mcq',
      choices: [
        'Produce higher average performance ratings',
        'May be less susceptible to legal challenges',
        'Take significantly less time to administer',
        'Eliminate the need for supervisor training'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'Grounding appraisals in job analysis makes them more defensible. This parallels the Uniform Guidelines requirement that selection systems be job-analysis based to be legally defensible.'
    },
    {
      q: 'A task statement in job analysis is typically stated in terms of:',
      type: 'mcq',
      choices: [
        'Knowledge, skill, and ability',
        'An action verb, object, and purpose',
        'Frequency, duration, and criticality',
        'Input, process, and output'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'The fuller formula in Figure 3.4 is ACTION VERB — OBJECT — HOW/USING WHAT EQUIPMENT — PURPOSE, as in "Measures doorway using tape measure to properly install door."'
    },
    {
      q: '"Answers telephone calls," "writes e-mails to address inquiries," and "engages in chat sessions" would all be grouped into which of the following?',
      type: 'mcq',
      choices: [
        'A functional category such as "Responding to customer complaints"',
        'A KSAO cluster',
        'A critical incident',
        'A compensable factor'
      ],
      correct: 0,
      difficulty: 'M',
      explanation: 'Functional categories are groups of tasks that serve a similar purpose; these groups are sometimes said to be grouped into larger "responsibilities." This is the chapter’s own example.'
    },
    {
      q: 'According to the chapter, which of the following is described as something more long-lasting or INNATE that the person brings with them to the job?',
      type: 'mcq',
      choices: ['Knowledge', 'Skill', 'Ability', 'Task'],
      correct: 2,
      difficulty: 'M',
      explanation: 'Knowledge is something learnable, as from a book; a skill is something one can learn how to do; an ability is more innate. The chapter concedes the distinctions are difficult and suggests thinking of them collectively as what a person needs to do the tasks.'
    },
    {
      q: 'The "O" in KSAO stands for:',
      type: 'mcq',
      choices: [
        'Occupational requirements',
        'Other characteristics, including for instance personality',
        'Organizational values',
        'Observable behaviors'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'KSAO = knowledge, skills, abilities, and other characteristics (including personality). The textbook notes KSA and KSAO are used interchangeably.'
    },
    {
      q: 'Which statement best captures why BOTH incumbents and supervisors are used as SMEs?',
      type: 'mcq',
      choices: [
        'Supervisors are more reliable raters, so incumbents serve only as a check',
        'Incumbents actually do the job and are most familiar with it, while supervisors better understand how the job fits into the overall organization — the two are complementary',
        'Legal guidelines require an equal number of each',
        'Incumbents provide tasks and supervisors provide critical incidents'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'The chapter frames the two as providing complementary information. Neither is presented as globally superior.'
    },
    {
      q: 'The Dictionary of Occupational Titles (DOT) was originally developed:',
      type: 'mcq',
      choices: [
        'By SIOP in 1945 to standardize I-O terminology',
        'During the Great Depression, when the Roosevelt Administration wanted to support businesses by providing job analysis information',
        'By the Department of Labor in 1991 to replace paper records',
        'After the 1964 Civil Rights Act to support selection validation'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'The DOT has been around since the 1930s. It eventually grew to the size of two large telephone books with thousands of short job descriptions; its most recent version was published in 1991.'
    },
    {
      q: 'Which of the following is a limitation of BOTH the DOT and O*NET?',
      type: 'mcq',
      choices: [
        'Neither covers government jobs',
        'Neither tells you what a particular job is actually like in YOUR organization',
        'Both require college-level reading ability from SMEs',
        'Both are available only in paper form'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'The chapter is explicit that DOT listings are not job analyses in themselves, and that O*NET, however detailed, still does not describe a particular organization’s job. Both are starting points. Only the DOT is paper-only.'
    },
    {
      q: 'How does information get into the O*NET database?',
      type: 'mcq',
      choices: [
        'Employers submit their internal job analyses to the Department of Labor',
        'Data are collected via surveys from employees around the US who are in those occupations',
        'Job analysts observe workers at randomly selected firms',
        'It is compiled automatically from job postings'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'Because O*NET is built from employee surveys, it describes what the AVERAGE employee in an occupation does — which is why it cannot substitute for an organization-specific analysis.'
    },
    {
      q: 'Which element of the O*NET content model would tell a student about the long-term outlook for an occupation?',
      type: 'mcq',
      choices: [
        'Worker characteristics',
        'Occupation-specific information',
        'Workforce characteristics',
        'Experience requirements'
      ],
      correct: 2,
      difficulty: 'H',
      explanation: 'Workforce characteristics covers labor market information and long-term outlook. The chapter flags this as especially interesting to students considering careers.'
    },
    {
      q: 'A job analyst conducts a "ride-along" with patrol officers. This is a variant of which data collection method?',
      type: 'mcq',
      choices: ['Focus groups', 'Observations', 'Job analysis survey', 'Critical incidents technique'],
      correct: 1,
      difficulty: 'M',
      explanation: 'Ride-alongs are an observational method, common when much of the work is done in the field. Observation is especially useful for technical jobs where interview terminology would be hard to follow.'
    },
    {
      q: 'The chapter notes a specific risk of using focus groups for job analysis, namely that:',
      type: 'mcq',
      choices: [
        'They take longer than individual interviews',
        'SMEs may not say certain things in front of each other, or may tailor what they say — as when a police officer simply agrees with their supervisor',
        'They cannot generate critical incidents',
        'They require a college-level reading ability'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'The power difference between ranks is the chapter’s example. The upside of groups is that SMEs can build off each other in describing the job.'
    },
    {
      q: 'When conducting a job analysis survey with large numbers of employees, the chapter says the main requirement is to:',
      type: 'mcq',
      choices: [
        'Keep the survey under 50 items',
        'Ensure the survey adequately samples employees by demographics such as gender and ethnicity, and across different work shifts and geographical areas',
        'Use only incumbents, never supervisors',
        'Administer it anonymously'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Adequate sampling across demographics, shifts, and geography is the stated requirement (Gatewood et al., 2018). Task surveys commonly exceed 100 items, so option A contradicts the text.'
    },
    {
      q: 'Morgeson and Campion (1997) identified biases affecting job analysis quality. Which method is described as PARTICULARLY susceptible to cognitive overload?',
      type: 'mcq',
      choices: [
        'Observations',
        'Focus groups',
        'Task questionnaires, which may be very long',
        'Ride-alongs'
      ],
      correct: 2,
      difficulty: 'H',
      explanation: 'Task surveys commonly run over 100 tasks, requiring many ratings and producing fatigue and decreased motivation — which is exactly the problem the carelessness index is designed to detect.'
    },
    {
      q: 'Which is NOT a consequence the chapter names of failing to explain a job analysis to SMEs?',
      type: 'mcq',
      choices: [
        'SMEs may find the process threatening',
        'SMEs may be careless because they do not realize it affects hiring',
        'Employees may conclude the analysis is for some "sinister" reason, hurting morale or prompting sabotage',
        'SMEs will provide systematically lower criticality ratings for all tasks'
      ],
      correct: 3,
      difficulty: 'H',
      explanation: 'The chapter names threat, carelessness, sinister interpretations, and morale/sabotage. A systematic downward shift in criticality ratings is not among them — the documented rating distortion runs the other way, with inflation when the purpose is selection.'
    },
    {
      q: 'DuVernet et al. (2015) found that SMEs tend to INFLATE their ratings when the job analysis is conducted for what purpose?',
      type: 'mcq',
      choices: ['Training', 'Selection', 'Job evaluation', 'Job design'],
      correct: 1,
      difficulty: 'H',
      explanation: 'Purpose matters. The same research stream also found (meta-analytically) that SMEs give more reliable data when they believe the purpose of the job analysis is relevant to them.'
    },
    {
      q: 'Task-KSA analysis is classified as which type of method, and where is it most commonly used?',
      type: 'mcq',
      choices: [
        'Worker-oriented; private-sector consulting firms',
        'Work-oriented; US government agencies, with guidelines from the Office of Personnel Management',
        'Worker-oriented; European multinationals',
        'Work-oriented; academic research settings only'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Work-oriented methods take the characteristics of the JOB as the primary unit of analysis. Task-KSA analysis is commonly used in US government agencies, with guidelines published by the U.S. Office of Personnel Management (2019).'
    },
    {
      q: 'In the criticality survey example, a task has a mean importance rating of 4.8 and a standard deviation of 1.41. What should the analyst do?',
      type: 'mcq',
      choices: [
        'Retain it — the mean is well above the 4.00 threshold',
        'Drop it — the high SD shows SMEs disagree about its importance',
        'Retain it but reduce its weight in the linkage survey',
        'Re-survey only the most experienced SMEs'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'This is Task 7, "Completes paperwork regarding research grants," from Figure 3.6. A task must clear BOTH criteria: high mean (above 4.00) AND low SD (below 1.00). Disagreement disqualifies it despite the high mean.'
    },
    {
      q: 'A task rated by 50 professors has a mean of 3.4 and an SD of 0.91. Why is it dropped?',
      type: 'mcq',
      choices: [
        'The SD is too high, indicating disagreement',
        'The mean is below the 4.00 threshold, showing SMEs do not think it is important',
        'It duplicates another task in the list',
        'It failed the linkage survey'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'This is Task 88, "Keeps desk and office tidy to facilitate work with students." The SD of 0.91 is acceptable; the problem is the low mean.'
    },
    {
      q: 'Who determines the mean and SD cut-offs used to retain tasks in a criticality survey, and when?',
      type: 'mcq',
      choices: [
        'The SMEs, by consensus after seeing the results',
        'The job analyst, usually in advance',
        'The organization’s legal department, after the analysis',
        'The Uniform Guidelines specify them'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'The chapter states that "the job analyst usually determines in advance the mean and SD that will be required to retain a task." Setting the criteria beforehand prevents post-hoc justification.'
    },
    {
      q: 'The KSAO criticality rating form (Figure 3.7) uses THREE scales rather than the task form’s two. What is the additional scale?',
      type: 'mcq',
      choices: [
        'Whether the KSAO can be trained on the job',
        'To what degree possessing this KSAO differentiates good from poor performance',
        'How frequently the KSAO is used per week',
        'Whether the KSAO appears in O*NET'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'The KSAO form asks about importance, time spent using the KSAO relative to others, and the degree to which possessing it differentiates good from poor performance. Data are then analyzed the same way as task ratings — retain high mean, low SD.'
    },
    {
      q: 'In a task-KSA linkage survey, what happens to a KSAO that SMEs do not link to any critical job task?',
      type: 'mcq',
      choices: [
        'It is retained but flagged as low priority',
        'It is discarded',
        'It is re-rated by a new group of SMEs',
        'It becomes a compensable factor'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'You want all KSAs linked to at least one critical job task. Unlinked KSAOs are discarded. Note also that a NEW group of SMEs performs the linkage ratings.'
    },
    {
      q: 'Which is the correct order of the task-KSA process shown in Figure 3.9?',
      type: 'mcq',
      choices: [
        'Criticality survey → assemble list → linkage survey → drop items → final list',
        'Assemble list of tasks and KSAOs → criticality survey → drop low-mean/high-SD items → linkage survey → final list',
        'Assemble list → linkage survey → criticality survey → drop items → final list',
        'Linkage survey → criticality survey → assemble list → final list → drop items'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'Assembly draws on past job analyses, interviews, and O*NET. Criticality ratings cover importance, time spent, and whether needed at time of hire. Only after screening do you run the linkage survey.'
    },
    {
      q: 'Task-KSA analysis is described as especially well suited to developing selection tests based on which kind of validity?',
      type: 'mcq',
      choices: ['Criterion-related validity', 'Content validity', 'Discriminant validity', 'Convergent validity'],
      correct: 1,
      difficulty: 'H',
      explanation: 'Content validity requires carefully sampling the domain — here, what the job actually is. The extensive documented list of tasks and linked KSAOs is exactly what supports that argument (Chs. 2 and 7).'
    },
    {
      q: 'The primary DISADVANTAGE of task-KSA analysis is that it:',
      type: 'mcq',
      choices: [
        'Cannot be used for government jobs',
        'Is very time-consuming, requiring a custom set of tasks and KSAOs for each job, and provides depth on only a single job',
        'Requires SMEs to have college-level reading ability',
        'Cannot produce information usable for training'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'That is why it is reserved for jobs where the investment is worthwhile — a single job with hundreds of positions, such as police officer or firefighter. The college-level reading requirement belongs to the PAQ.'
    },
    {
      q: 'The critical incidents technique was developed by:',
      type: 'mcq',
      choices: ['McCormick et al. (1972)', 'Flanagan (1954)', 'Primoff (1975)', 'Fine (1988)'],
      correct: 1,
      difficulty: 'M',
      explanation: 'Flanagan (1954). McCormick developed the PAQ, Primoff the job element method, and Fine functional job analysis.'
    },
    {
      q: 'Which of the following is NOT one of the three uses the chapter names for critical incident data?',
      type: 'mcq',
      choices: [
        'Developing interview and test questions for selection',
        'Developing behaviorally anchored rating scales (BARS) for performance appraisal',
        'Developing work-related scenarios for training',
        'Determining compensable factors for job evaluation'
      ],
      correct: 3,
      difficulty: 'H',
      explanation: 'Selection questions, BARS, and training scenarios are the three named uses. Compensable factors belong to job evaluation, a different application of job analysis.'
    },
    {
      q: 'Each entry in a critical incidents table contains:',
      type: 'mcq',
      choices: [
        'A task, its importance rating, and its time-spent rating',
        'An incident faced by employees, positive and negative responses, and the consequences',
        'A KSAO, its criticality, and its linkage',
        'A job title, its point value, and its market salary'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Table 3.1 gives the angry-customer example: staying calm and solving the problem yields a satisfied, grateful customer; losing one’s cool yields a more upset customer demanding a supervisor.'
    },
    {
      q: 'How many items does the Position Analysis Questionnaire (PAQ) contain?',
      type: 'mcq',
      choices: ['89', '100', '195', '325'],
      correct: 2,
      difficulty: 'M',
      explanation: '195 items, written to describe a broad range of jobs (McCormick et al., 1972). It is an "off-the-shelf" alternative to the far more time-consuming task-KSA analysis.'
    },
    {
      q: 'A key practical constraint of the PAQ is that it:',
      type: 'mcq',
      choices: [
        'Can only be used for government jobs',
        'Requires college-level reading ability, so the job analyst — not the SME — must complete it after interviewing SMEs',
        'Must be scored by hand',
        'Cannot be used to compare jobs'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'The reading-level requirement is a specific detail in the chapter. Option D reverses one of the PAQ’s main STRENGTHS — it is good precisely for comparing jobs, whereas task-KSA analysis gives depth on only one or two.'
    },
    {
      q: 'If the PAQ database recommends a clerical ability test for a job, the chapter says this means you:',
      type: 'mcq',
      choices: [
        'Can begin using that test immediately for hiring',
        'Might research such tests for your job to see if they actually are valid predictors of job performance',
        'Must use that test to remain legally defensible',
        'Should abandon further job analysis'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'The recommendation is a lead, not a license. Local validation remains necessary (Ch. 7). This mirrors the general theme that off-the-shelf sources are starting points.'
    },
    {
      q: 'What most clearly distinguishes competency modeling from traditional job analysis?',
      type: 'mcq',
      choices: [
        'It uses a longer list of tasks',
        'It includes the organization’s values and mission, adding organizational context and culture',
        'It relies exclusively on incumbents as SMEs',
        'It is required by the Uniform Guidelines'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Traditional job analysis describes individual jobs and their human requirements; competency modeling adds "the flavor of the goals and values of the organization" — e.g., a "customer focus" competency spanning all jobs.'
    },
    {
      q: 'According to Campion et al. (2011), competency models differ from traditional job analysis in that they:',
      type: 'mcq',
      choices: [
        'Focus on TOP performance rather than just average performance, vary across organizational levels, and link directly to business strategies',
        'Rely more heavily on observation than on survey data',
        'Require larger SME samples than task-KSA analysis',
        'Exclude personality characteristics'
      ],
      correct: 0,
      difficulty: 'H',
      explanation: 'These three differences, plus the inclusion of values and mission, also help explain why competency models may be easier to "sell" to top management than traditional job analyses.'
    },
    {
      q: 'SHRM’s HR competency model was built from input from over 1,000 HR professionals and a survey of over 32,000 respondents, producing how many competencies?',
      type: 'mcq',
      choices: ['Five', 'Nine', 'Twelve', 'Twenty-four'],
      correct: 1,
      difficulty: 'H',
      explanation: 'Nine competencies. The model was developed with input from I-O psychologists, specifically the SIOP Taskforce on Competency Modeling.'
    },
    {
      q: 'Functional job analysis (FJA; Fine, 1988) is built on the premise that all jobs require workers to deal with:',
      type: 'mcq',
      choices: ['People, data, and things', 'Knowledge, skills, and abilities', 'Tasks, roles, and responsibilities', 'Inputs, processes, and outputs'],
      correct: 0,
      difficulty: 'H',
      explanation: 'FJA specifies who performs the task, what action is performed, the result, tools or equipment used, and procedures followed. It provides excellent detail but requires substantial work from a well-trained analyst.'
    },
    {
      q: 'The job element method (JEM; Primoff, 1975) is criticized in the chapter because it:',
      type: 'mcq',
      choices: [
        'Requires proprietary scoring software',
        'Largely skips over the explicit definition of job tasks, making it less suitable when you want detail on what is actually done',
        'Cannot accommodate more than 20 elements',
        'Was never validated for government jobs'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'JEM is worker-oriented, specifying worker characteristics as elements broken into subelements — the barista example being "ability to make coffee drinks" broken into finding out what the customer wants, estimating heat, and understanding the equipment.'
    },
    {
      q: 'Why is the VALIDITY of job analysis data difficult to establish directly?',
      type: 'mcq',
      choices: [
        'Job analyses are proprietary and cannot be audited',
        'The data come from subjective SME judgments and there are no objective measures to tie them to',
        'Job analyses are rarely repeated over time',
        'The Uniform Guidelines prohibit validation studies of job analyses'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'With no criterion or standard to compare against, the field instead demonstrates RELIABILITY — typically interrater agreement — on the grounds that reliability is a necessary condition for validity (Ch. 2).'
    },
    {
      q: 'A job analysis survey includes the item "Encapsulates rigorous metallurgical characters" among professor tasks. This item is:',
      type: 'mcq',
      choices: [
        'A functional category header',
        'A carelessness (bogus) item used to detect inattentive SMEs',
        'A cognitive task analysis probe',
        'A linkage survey anchor'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Carelessness indices (Green & Stutzman, 1986) scatter nonsensical or clearly irrelevant items through a survey. In Figure 3.10, item 4 is nonsense and item 8 ("Changes hand towels in campus restrooms") is clearly not part of the job.'
    },
    {
      q: 'If an SME endorses too many carelessness items, the chapter recommends that:',
      type: 'mcq',
      choices: [
        'The SME be retrained and re-surveyed',
        'Their data be removed from further analysis',
        'Their ratings be statistically down-weighted',
        'The bogus items be removed and the rest retained'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Endorsement suggests the SME is not paying attention, so their data should be removed. This matters because long task surveys produce fatigue and carelessness.'
    },
    {
      q: 'Regarding SME gender and ethnicity, research indicates that different demographic groups:',
      type: 'mcq',
      choices: [
        'Provide substantially different job analysis data, requiring stratified analysis',
        'Give relatively similar job analysis data, or the differences are fairly small',
        'Cannot be compared because sample sizes are always too small',
        'Provide more reliable data when matched to the analyst’s own demographics'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'DuVernet et al. (2015). The chapter is explicit: include people from different backgrounds "for purposes of diversity and inclusion rather than because there will be large differences in the way they describe their jobs."'
    },
    {
      q: 'Despite demographics not changing the data much, the chapter gives two reasons to ensure a representative SME sample. One is inclusion; the other is that:',
      type: 'mcq',
      choices: [
        'O*NET requires demographic reporting',
        'US courts have indicated that SME samples used for job analysis should represent the makeup of the organization',
        'SIOP’s Principles mandate proportional sampling',
        'Statistical power requires demographic balance'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'The police sergeant example illustrates the inclusion rationale: sampling mostly male sergeants for a promotional test could shut female sergeants out, create perceptions of bias in favor of men, and produce resentment.'
    },
    {
      q: 'Regarding SME EXPERIENCE level, the chapter concludes that:',
      type: 'mcq',
      choices: [
        'Experience makes no difference to job analysis data',
        'People of different experience levels MAY give different types of job analysis data, so sampling across levels can affect results',
        'Only SMEs with 10+ years of experience should be used',
        'Newer employees consistently produce more accurate task lists'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'The firefighter example cuts both ways: newer workers have standard tasks uppermost in mind but lack the tricks of the trade; veterans know the tricks but may omit obvious tasks that have become second nature (Sanchez et al., 1998; Tross & Maurer, 2000).'
    },
    {
      q: 'Dierdorff and Wilson (2003) found in a meta-analysis that job analysis information from INCUMBENTS:',
      type: 'mcq',
      choices: [
        'Is more reliable than that from job analysts or technical experts',
        'May be LESS reliable than information obtained from job analysts or technical experts',
        'Is equally reliable across all job types',
        'Cannot be used for selection system validation'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'The counterpoint offered by Sanchez and Levine (2012) is important: lower reliability (rater disagreement) may merely indicate that the job IS done differently by different employees holding the same job title.'
    },
    {
      q: 'Research indicates that KSA ratings, compared with task ratings, are:',
      type: 'mcq',
      choices: [
        'More reliable and less inflated',
        'Less reliable and more likely to be inflated',
        'Equally reliable but harder to collect',
        'More reliable but less legally defensible'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'Dierdorff & Morgeson (2009) found lower reliability; Morgeson et al. (2004) found more inflation; DuVernet et al. (2015) confirmed both meta-analytically. The reason is that tasks are concrete observable behaviors while KSAs are abstract and require inference.'
    },
    {
      q: 'Given that KSA ratings are noisier than task ratings, what do the authors recommend?',
      type: 'mcq',
      choices: [
        'Focus on task statements and drop KSAOs from job analyses',
        'Be especially careful to develop KSAO statements that are precise and not too broad, and careful in interpreting data based on them',
        'Collect KSAO data only from supervisors',
        'Use O*NET KSAO listings instead of collecting local data'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'The chapter explicitly says it would NOT suggest focusing on tasks rather than KSAOs, since KSAOs are essential to understanding the personal characteristics needed. The remedy is precision, not abandonment.'
    },
    {
      q: 'Aguinis et al. (2009) found that training SMEs:',
      type: 'mcq',
      choices: [
        'Increased the number of tasks SMEs generated',
        'Reduced the correlation between SMEs’ own personality characteristics and the ratings they gave for a job’s personality requirements',
        'Eliminated the need for carelessness indices',
        'Increased mean criticality ratings across all tasks'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'In effect, training reduced projection of the rater’s own traits onto the job. The chapter notes more research is needed on what kind of training is best.'
    },
    {
      q: 'Job evaluation is best defined as:',
      type: 'mcq',
      choices: [
        'A supervisor’s appraisal of an employee’s performance',
        'A particular type of job analysis used to determine the relative value that jobs have within an organization',
        'The process of validating a selection test against job performance',
        'A survey of market salaries for benchmark jobs'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'Colloquially: "who makes more than whom." Option A is performance appraisal; option D describes a salary survey, which is used to establish EXTERNAL equity rather than the job evaluation itself.'
    },
    {
      q: 'Internal equity is achieved through job evaluation, while actual pay LEVELS are largely determined by:',
      type: 'mcq',
      choices: [
        'The number of compensable factor points',
        'Outside market forces — external equity, assessed through salary surveys',
        'Union negotiation exclusively',
        'The Uniform Guidelines'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Job evaluation establishes relative internal fairness; the market sets the actual dollar figures. Maintaining external equity is important for attracting and retaining the best talent.'
    },
    {
      q: 'Which of the following is NOT one of the three compensable factors named in the chapter?',
      type: 'mcq',
      choices: [
        'Working conditions',
        'Experience or knowledge required',
        'Level of responsibility',
        'Years of tenure with the organization'
      ],
      correct: 3,
      difficulty: 'M',
      explanation: 'The three factors are working conditions (firefighter example), experience/knowledge required (research scientist example), and level of responsibility (manager supervising a dozen employees). Individual tenure is a person characteristic, not a job characteristic.'
    },
    {
      q: 'In Figure 3.11, managers have 952 points and administrative assistants have 350. What does this imply?',
      type: 'mcq',
      choices: [
        'Managers should make approximately three times as much as administrative assistants',
        'Managers should make approximately twice as much as administrative assistants',
        'The point difference cannot be translated into pay ratios',
        'Administrative assistants should be paid the market median regardless of points'
      ],
      correct: 0,
      difficulty: 'M',
      explanation: 'The chapter draws this inference explicitly, also noting that administrative assistants and truck drivers should make about half as much as engineers (750 points).'
    },
    {
      q: 'If a salary survey shows engineers (750 points) are paid about $150,000, what does the chapter extrapolate for managers (952 points)?',
      type: 'mcq',
      choices: ['About $175,000', 'About $200,000', 'About $250,000', 'About $300,000'],
      correct: 1,
      difficulty: 'H',
      explanation: 'Approximately $200,000. This illustrates how organizations survey only benchmark jobs and extrapolate pay for the rest.'
    },
    {
      q: '"Benchmark jobs" are:',
      type: 'mcq',
      choices: [
        'Jobs with the highest point totals in a job evaluation',
        'The most essential jobs, for which organizations conduct salary surveys, with pay for other jobs extrapolated',
        'Jobs listed in O*NET as having a bright outlook',
        'Entry-level positions used to anchor a pay scale at its minimum'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'Organizations often lack the resources to survey every job, so they survey their most essential jobs and extrapolate the rest.'
    },
    {
      q: 'The comparable worth issue is BEST illustrated by which scenario?',
      type: 'mcq',
      choices: [
        'A female college professor being paid less than a male college professor with identical credentials',
        'Administrative assistants (traditionally female) being paid less than truck drivers (traditionally male) even though job evaluation shows equal or greater value',
        'A manager being paid less than an engineer they supervise',
        'An employee whose actual duties exceed their written job description'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'Option A is "equal pay for the same work" — a DIFFERENT issue, affecting professions from stockbrokers to movie stars. Comparable worth concerns pay differences between DIFFERENT jobs typed male versus female with equivalent evaluated worth.'
    },
    {
      q: 'The comparable worth issue "gained some traction in the 1980s" but has since died down largely because:',
      type: 'mcq',
      choices: [
        'Job evaluation methods were shown to be unreliable',
        'The courts have generally come down on the side of organizations needing to use market forces to set pay',
        'Congress explicitly outlawed comparable worth claims',
        'Point-factor systems were replaced by competency models'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'Killingsworth (2002) is cited. The chapter also notes greater fluidity today in the opportunities open to men and women across jobs than at any previous point in history.'
    },
    {
      q: 'Under the Uniform Guidelines, a job analysis used to develop selection tests must meet which requirements?',
      type: 'mcq',
      choices: [
        'It must be reported in writing, the procedure must be clearly described, and a wide variety of sources should be used',
        'It must be conducted by a licensed psychologist and filed with the EEOC',
        'It must include at least 100 tasks and 20 KSAOs',
        'It must be repeated every two years'
      ],
      correct: 0,
      difficulty: 'H',
      explanation: 'These three requirements are named explicitly (Morgeson et al., 2019; Thompson & Thompson, 1982), alongside the general rule that a US selection system should be based on a job analysis to be legally defensible.'
    },
    {
      q: 'The chapter identifies two implications of multinational operations for job analysis. One is that job titles may mean different things across countries; the other is that:',
      type: 'mcq',
      choices: [
        'Task statements cannot be translated accurately',
        'Competency modeling is particularly susceptible to cultural differences — but may also be especially useful for transmitting organizational goals and values worldwide',
        'O*NET cannot be used outside the United States',
        'The PAQ is invalid outside English-speaking countries'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'Because competency models depend on organizational culture and values, they are both vulnerable to cultural variation and valuable as a vehicle for spreading shared values. The WHO’s global competency model (2020) is the chapter’s example.'
    },
    {
      q: 'The move toward the term "work analysis" reflects the recognition that:',
      type: 'mcq',
      choices: [
        'Job analysis is legally obsolete',
        'Clear-cut, specific "jobs" are not always easily analyzed in today’s workforce, since jobs change quickly and are more fluid',
        'Only worker-oriented methods remain valid',
        'Analysis should be conducted by employees rather than analysts'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Sanchez and Levine (2012). Morgeson and Dierdorff (2011) add that we should think in terms of WORK ROLES, acknowledging that work changes over time and that workers are integrated into large teams and contexts.'
    },
    {
      q: 'Cognitive task analysis differs from traditional task analysis in that it focuses on:',
      type: 'mcq',
      choices: [
        'The cognitive processes involved in doing the job, rather than just what a person does',
        'The organization’s mission and values',
        'The relative pay value of cognitively demanding jobs',
        'Electronic monitoring of keystrokes'
      ],
      correct: 0,
      difficulty: 'M',
      explanation: 'The barista contrast: "prepare coffee drinks" (traditional) versus "calculate the heat of steamed milk" and "remain aware of own emotions under stress" (cognitive). It is time-consuming and expensive but may be worthwhile for high-risk, critical jobs such as air traffic controller.'
    },
    {
      q: 'Sanchez and Levine (2012) explain declining job analysis research in top journals by arguing that:',
      type: 'mcq',
      choices: [
        'Job analysis has been superseded by competency modeling',
        'Job analysis is not usually an end in itself; it is done in support of other, more "important" I-O functions such as selection or training',
        'Job analysis findings are proprietary and cannot be published',
        'Reliability problems make job analysis studies unpublishable'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'The chapter is clear that the declining research interest is not a verdict on importance. It also flags the use of technology in job analysis as an area "ripe for research."'
    },
    {
      q: 'Which is a DOWNSIDE the chapter names for using electronically monitored data (keystrokes, wearable badges) in job analysis?',
      type: 'mcq',
      choices: [
        'It cannot capture what employees actually do',
        'Workers may perceive it as an invasion of privacy, it raises legal and ethical data-security issues, and it may create stress from feeling "always on"',
        'It is prohibited under the Uniform Guidelines',
        'It produces less objective data than SME interviews'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'The upside is precisely that it is more OBJECTIVE — showing what incumbents actually do rather than what they say they do. The three downsides named are privacy perceptions, legal/ethical data security, and always-on stress.'
    },
    {
      q: 'A friend plans to conduct a job analysis for salespeople in his company by simply downloading the O*NET "retail salespersons" listing. Based on the chapter, the best advice is that:',
      type: 'mcq',
      choices: [
        'This is sufficient, since O*NET data come from thousands of respondents',
        'O*NET is a useful starting point, but it describes the average employee in the occupation and does not tell him what the job is actually like in his organization',
        'He should use the DOT instead, since it is more detailed',
        'He should skip O*NET entirely and go directly to a PAQ'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'This is the chapter’s own end-of-chapter question. O*NET gives you a place to start in understanding factors related to conducting a job analysis in your organization — but organization-specific data collection is still required.'
    },
    {
      q: 'An organization needs to compare requirements across dozens of different jobs quickly to support a new pay structure. Which job analysis method is most appropriate?',
      type: 'mcq',
      choices: [
        'Task-KSA analysis, because of its documentation depth',
        'The Position Analysis Questionnaire, because it is pre-made, comparable across jobs, and its database informs relative job point values for pay',
        'Cognitive task analysis, because it captures mental demands',
        'The critical incidents technique, because it captures behavior'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'Task-KSA analysis gives depth on one or two jobs but is far too time-consuming for dozens. The PAQ is explicitly described as good for comparing jobs and as providing guidance for point values to help develop a pay plan.'
    }
  ]
};
