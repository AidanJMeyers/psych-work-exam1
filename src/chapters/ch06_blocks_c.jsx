import React from 'react';
import { Callout, Table, Card } from '../components/Visual.jsx';

const IMG = 'ch06_personnel_selection';

// Blocks 13-18 of Chapter 6 (work samples → summary table)
export default [
  // ------------------------------------------------------------------ 13
  {
    id: 'work-samples',
    title: 'Work Sample Tests',
    subtitle: 'The highest validity in the chapter — at the highest administrative cost',
    content: (
      <>
        <p>
          The logic: it would be great to assess a job applicant&rsquo;s{' '}
          <strong>actual performance BEFORE they are hired</strong> — rather than relying on a{' '}
          <strong>probationary period</strong> during the first weeks or months of employment. Three procedures do
          this: <strong>classic work samples/simulations, assessment centers, and situational judgment
          tests</strong>.
        </p>

        <p>
          <strong>Work sample test</strong> — glossary: <em>a test in which the applicant is asked to do a small
          portion of the job. For instance, an applicant for a mechanic&rsquo;s job might be required to
          disassemble or assemble a piece of equipment as they would do in the workplace.</em>
        </p>

        <Callout kind="info" title="The chapter's three examples">
          <ul className="list-disc pl-5 space-y-1">
            <li>A <strong>mechanic</strong> applicant disassembles or assembles a piece of equipment.</li>
            <li>A <strong>college professor</strong> applicant prepares and delivers a sample lecture to students.</li>
            <li>A <strong>short-order cook</strong> applicant actually prepares a series of meals.</li>
          </ul>
        </Callout>

        <Callout kind="danger" title="Two kinds of fidelity — a term pair worth memorizing">
          <Table
            headers={['Type', 'Meaning', 'Consequence']}
            rows={[
              [
                <strong key="p">Psychological fidelity</strong>,
                'The work sample ELICITS THE KSAs NEEDED ON THE JOB (Goldstein et al., 1993).',
                'Gives work samples clear CONTENT VALIDITY (Ch. 7).'
              ],
              [
                <strong key="ph">Physical fidelity</strong>,
                'The work sample ACTUALLY LOOKS LIKE THE JOB.',
                'Makes work samples ATTRACTIVE TO JOB APPLICANTS (Hausknecht et al., 2004).'
              ]
            ]}
          />
        </Callout>

        <Table
          headers={['', 'Detail']}
          rows={[
            [
              <strong key="v">Criterion-related validity</strong>,
              'Meta-analysis shows GOOD validity, correlating as much as .54 with job performance (Schmidt & Hunter, 1998) — THE HIGHEST SINGLE VALIDITY IN TABLE 6.6.'
            ],
            [
              <strong key="d">The downside</strong>,
              'EXPENSIVE. Work samples can ONLY BE ADMINISTERED TO ONE APPLICANT AT A TIME. For that reason they are often administered as ONE OF THE LATER SELECTION HURDLES, after other, cheaper procedures are complete.'
            ],
            [
              <strong key="c">A design constraint</strong>,
              'Work samples SHOULD NOT ASSESS JOB SKILLS THAT APPLICANTS WOULD BE EXPECTED TO LEARN LATER ON THE JOB (Gatewood et al., 2018).'
            ]
          ]}
        />
      </>
    )
  },

  // ------------------------------------------------------------------ 14
  {
    id: 'assessment-centers',
    title: 'Assessment Centers',
    subtitle: '"Work samples for managers" — three exercises, four advantages, three challenges',
    content: (
      <>
        <p>
          <strong>Assessment centers</strong> — glossary: <em>work samples for managers.</em> They were{' '}
          <strong>first used on a large scale in the US by AT&amp;T in the 1960s</strong>, and are used in many
          large organizations throughout the US and Europe today. They put{' '}
          <strong>candidates for promotion to manager</strong> through a series of exercises reflecting the job.
        </p>

        <Callout kind="danger" title="The three named exercises — memorize each definition">
          <Table
            headers={['Exercise', 'Glossary definition', 'What it assesses']}
            rows={[
              [
                <strong key="i">In-box / in-basket exercise</strong>,
                'Requires the candidate to REVIEW a number of MEMORANDA OR E-MAILS that have been sent to them, and determine WHICH HAVE PRIORITY and HOW THEY WOULD RESPOND. After working on responses, candidates PRESENT THEIR ANSWERS TO TRAINED RATERS — experts in management or psychologists.',
                'Prioritizing, decision-making'
              ],
              [
                <strong key="r">Role play</strong>,
                'Candidates PLAY OUT A SITUATION they would encounter on the job, such as a SUBORDINATE WITH A PERFORMANCE PROBLEM.',
                'Interpersonal skills, leadership'
              ],
              [
                <strong key="l">Leaderless group discussion</strong>,
                'Candidates are PRESENTED WITH A PROBLEM AS A GROUP, such that they can be evaluated for TEAMWORK AND LEADERSHIP.',
                'Teamwork, leadership'
              ]
            ]}
          />
          <p className="mt-2 text-sm">
            Managerial skills evaluated include <strong>decision-making, leadership, prioritizing, and
            interpersonal skills</strong>. The chapter&rsquo;s multi-day picture: sorting e-mails and prioritizing
            them, role plays about problem subordinates and difficult customers, then working with peers to solve
            a work-related problem — all <strong>observed and rated by a set of management experts</strong>.
          </p>
        </Callout>

        <Callout kind="tip" title="Four advantages">
          <ol className="list-decimal pl-5 space-y-1">
            <li>They provide a <strong>REALISTIC CONTEXT</strong> for assessing the strengths of candidates for promotion.</li>
            <li>
              Like other work samples, they are <strong>ATTRACTIVE TO CANDIDATES because they really look like the
              job</strong>.
            </li>
            <li>
              Beyond obvious <strong>content validity</strong>, meta-analyses demonstrate a significant
              relationship with work performance —{' '}
              <strong>as high as .45</strong> (Arthur et al., 2003; Sackett et al., 2017b).
            </li>
            <li>
              They can do <strong>&ldquo;DOUBLE DUTY&rdquo;</strong>: organizations use them to decide{' '}
              <strong>whom to promote</strong>, but they also provide{' '}
              <strong>rich FEEDBACK to candidates, whether or not they are promoted</strong>.
            </li>
          </ol>
        </Callout>

        <Callout kind="danger" title="Three challenges">
          <ol className="list-decimal pl-5 space-y-1.5">
            <li>
              <strong>Not cheap to administer.</strong> Materials must be developed, assessors trained and
              compensated, and the location rented (Lievens &amp; De Soete, 2012).
            </li>
            <li>
              <strong>Transparency of the dimensions.</strong> Applicants who can{' '}
              <strong>correctly GUESS what dimensions are being assessed DO BETTER</strong> than other candidates
              (Kleinmann et al., 2011).
            </li>
            <li>
              <strong>Adverse impact.</strong> Although <strong>less than that of some other selection
              procedures</strong>, research shows they may have <strong>SOME SMALL AMOUNT of adverse
              impact</strong> (Whetzel et al., 2008).
            </li>
          </ol>
        </Callout>

        <Card title="What assessment centers measure — an unsettled question">
          <p className="text-sm">
            <strong>Hoffman et al. (2015)</strong> found meta-analytically that assessment center exercises are
            related to <strong>COGNITIVE ABILITY</strong> and to the personality traits of{' '}
            <strong>EXTRAVERSION and OPENNESS TO EXPERIENCE</strong>. But there continue to be questions as to
            whether we should think of assessment centers as <strong>units of EXERCISES or KSA
            DIMENSIONS</strong> that predict performance (Hoffman et al., 2011; Kleinmann &amp; Ingold, 2019), and
            there have been calls to examine their <strong>INTERPERSONAL nature</strong> more deeply.
          </p>
          <p className="text-xs text-slate-500 mt-2">
            Geography note: assessment centers are popular in the US, Australia, Africa, and across Europe, with
            increasing popularity in Asia as well (Lievens et al., 2009).
          </p>
        </Card>
      </>
    )
  },

  // ------------------------------------------------------------------ 15
  {
    id: 'sjts',
    title: 'Situational Judgment Tests (SJTs)',
    subtitle: 'Low-fidelity simulations — the affordable work sample',
    images: [
      {
        src: `${IMG}/06l_fig6-7_sjt_barista_items.png`,
        alt: 'Figure 6.7: two sample situational judgment test items for the job of barista — one about a customer complaining that a drink was made incorrectly, and one about a sudden rush where a coworker at the register asks for help. Correct options are marked with asterisks.',
        caption: 'Figure 6.7 — Sample SJT items for the job of barista. Correct choices marked with an asterisk.'
      }
    ],
    content: (
      <>
        <Callout kind="danger" title="The definition — note the technical name">
          <strong>Situational judgment tests (SJTs)</strong> — glossary:{' '}
          <em>technically known as LOW-FIDELITY SIMULATIONS. SJT questions put the job applicant into a
          work-related situation and ask what they believe is the right action.</em>
        </Callout>

        <p>
          <strong>Why they exist:</strong> work samples and assessment centers have obvious advantages, but given
          their <strong>cost</strong>, how can an organization use this kind of procedure{' '}
          <strong>on a LARGE SCALE</strong>? SJTs are the answer. The chapter&rsquo;s example: a customer service
          applicant is given a situation where a customer calls to complain about product quality and asks for a
          refund, then is asked how they would respond.
        </p>

        <Callout kind="info" title="Formats — SJTs vary on BOTH stimulus and response">
          <Table
            headers={['Element', 'Options (Bauer et al., 2011)']}
            rows={[
              ['STIMULUS material', 'WRITTEN form, or a SHORT VIDEO'],
              ['RESPONSE format', 'MULTIPLE-CHOICE or OPEN-ENDED; alternatives can be presented in WRITTEN or VIDEO format']
            ]}
          />
        </Callout>

        <Table
          headers={['', 'Detail']}
          rows={[
            [
              <strong key="c">Cost</strong>,
              'CHEAPER to administer than either work samples or assessment centers — AFTER their original development costs.'
            ],
            [
              <strong key="a">Applicant reactions</strong>,
              'VERY ATTRACTIVE to applicants because of their REALISM. Table 6.6: "perceived positively by applicants, less costly than other work sample-like assessments."'
            ],
            [
              <strong key="v">Validity</strong>,
              'Meta-analyses show a good relationship between SJT dimensions and work performance — correlations with job performance from .19 to .43 (Christian et al., 2010).'
            ]
          ]}
        />

        <Callout kind="danger" title="Lievens and Sackett (2012) — quite an impressive feat">
          The authors tracked <strong>Belgian medical school students</strong> from entry into medical school
          into the early stages of their careers. A <strong>VIDEO-BASED SJT focused on INTERPERSONAL
          SKILLS</strong> predicted:
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Candidates&rsquo; <strong>internship performance SEVEN YEARS later</strong></li>
            <li>Their <strong>work performance NINE YEARS later</strong></li>
          </ul>
          <p className="mt-2 text-sm">
            Memorize the pairing: <strong>7 years → internship; 9 years → work performance.</strong>
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 16
  {
    id: 'biodata-history',
    title: 'Biodata, T&E Ratings, Résumés & Reference Checks',
    subtitle: 'Personal history measures — what works and what does not',
    images: [
      {
        src: `${IMG}/06m_table6-5_biodata_items.png`,
        alt: 'Table 6.5: sample biodata items and what each predicts — number of jobs held in the last five years predicts employee turnover; sports played in school predicts performance in a sporting goods store; likelihood of explaining an answer to a stranger predicts performance in a customer service job.',
        caption: 'Table 6.5 — Sample biodata items and the outcomes each is intended to predict.'
      }
    ],
    content: (
      <>
        <Card title="Biodata">
          <p className="text-sm">
            <strong>Glossary:</strong> <em>biodata items include questions concerning an applicant&rsquo;s
            education and past work and life experience that can help decide how well the applicant can perform
            the job. They are typically scored through a DETAILED SCORING PROCESS ESTABLISHED THROUGH
            RESEARCH.</em>
          </p>
          <p className="text-sm mt-2">
            <strong>The underlying idea:</strong> <em>past and present behavior are the best predictors of future
            behavior.</em> Note the terminological point: <strong>when psychologists use the term
            &ldquo;biodata,&rdquo; it is IMPLIED that some sort of DETAILED, EMPIRICAL SCORING has been used to
            validate the measures.</strong>
          </p>
          <Table
            headers={['Sample biodata item (Table 6.5)', 'Intended to predict…']}
            rows={[
              ['"How many jobs have you held in the last five years?" (open-ended)', 'Employee TURNOVER'],
              ['"Please list any sports that you played in school related to the job you are applying for" (open-ended)', 'Performance in a SPORTING GOODS STORE'],
              ['"When a stranger has asked you a question, how likely are you to explain your answer to them until they understand?" (1–5 rating)', 'Performance in a CUSTOMER SERVICE job']
            ]}
          />
          <Callout kind="danger" title="Validity and the two major issues">
            <p>
              <strong>Validity: .37 to .52</strong> — <em>&ldquo;Biodata&rsquo;s track record as a predictor is
              quite good&rdquo;</em> (Hunter &amp; Hunter, 1984; Vinchur et al., 1998). One concern:{' '}
              <strong>some items can have ADVERSE IMPACT against women or ethnic minorities</strong>, so this must
              be carefully taken into account in development and validation.
            </p>
            <ol className="list-decimal pl-5 mt-2 space-y-1">
              <li>
                <strong>Applicant faking.</strong> Applicants <strong>should be told that any answers they provide
                are OPEN TO LATER VERIFICATION</strong>. Research also shows that{' '}
                <strong>asking applicants to ELABORATE on their answers — to provide further information and
                explanation — leads to LESS INFLATED responses</strong> (Levashina et al., 2012; Schmitt &amp;
                Kunce, 2002).
              </li>
              <li>
                <strong>Scoring procedures.</strong> Determining the scoring key through{' '}
                <strong>more EMPIRICAL means — examining items&rsquo; ACTUAL relationship with job performance —
                leads to GREATER VALIDITY</strong> (Cucina et al., 2012). This underscores basing items on{' '}
                <strong>job analysis</strong>, carefully considering what past experiences should lead to better
                performance, and <strong>thoroughly PILOTING</strong> items before use.
              </li>
            </ol>
          </Callout>
        </Card>

        <Card title="Ratings of training and experience (T&E forms)">
          <Table
            headers={['Feature', 'Detail']}
            rows={[
              ['Where used', 'COMMONLY USED IN THE PUBLIC SECTOR'],
              ['Key contrast with biodata', 'UNLIKE BIODATA, T&E FORMS ARE NOT EMPIRICALLY SCORED. They are scored by a TRAINED RATER after asking about current work experience and education.'],
              ['Question source', 'Based on the SPECIFIC JOB TASKS AND KSAs identified in a JOB ANALYSIS — e.g., "How many years of experience have you had supervising groups of five or more employees?"'],
              ['Validity', 'Can vary SUBSTANTIALLY: .11 to .45, DEPENDING ON HOW APPLICANTS’ RESPONSES ARE SCORED (McDaniel et al., 1988; Schmidt & Hunter, 1998)']
            ]}
          />
          <Callout kind="danger" title="Van Iddekinge et al. (2019) — the bad news about pre-hire experience">
            A meta-analysis of <strong>pre-hire work experience</strong> (the duration, type, and amount of
            experience a person has <em>before</em> entering a new organization) found{' '}
            <strong>LOW correlations</strong>:
            <div className="grid grid-cols-3 gap-2 mt-2 text-center">
              {[
                ['Job performance', '.06'],
                ['Training performance', '.11'],
                ['Turnover', '.00']
              ].map(([k, v]) => (
                <div key={k} className="bg-white border border-red-200 rounded p-2">
                  <div className="text-xl font-bold text-red-700">{v}</div>
                  <div className="text-[11px] text-slate-600">{k}</div>
                </div>
              ))}
            </div>
            <p className="mt-2 text-sm">
              It was <strong>slightly better at predicting performance IMMEDIATELY AFTER hire</strong>. The
              authors also note that <strong>the work experience a person gains IN THEIR CURRENT ORGANIZATION may
              be MORE predictive</strong> of their performance.
            </p>
          </Callout>
          <Callout kind="info" title="Machine learning applied to experience data">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Sajjadiani et al. (2019):</strong> using over <strong>16,000 public teaching
                applicants</strong>, machine learning analyzed <strong>past job descriptions and job
                changes</strong> to predict <strong>turnover and performance</strong>.
              </li>
              <li>
                <strong>Campion et al. (2016):</strong> in a sample of <strong>46,000 public sector
                candidates</strong>, an algorithm was trained to <strong>MIMIC HUMAN RATERS in scoring candidate
                ESSAY QUESTIONS</strong> — a significant cost saving with such large samples.
              </li>
            </ul>
          </Callout>
        </Card>

        <Card title="Résumés">
          <ul className="list-disc pl-5 space-y-1.5 text-sm">
            <li>
              <strong>The volume problem:</strong> the sheer number some employers receive.
            </li>
            <li>
              <strong>The comparability problem:</strong> <strong>applicants CONTROL the information
              provided</strong>, so different applicants provide different types of information — and{' '}
              <strong>sometimes inaccurate information</strong> — making meaningful comparison very difficult.
            </li>
            <li>
              <strong>There is LITTLE HARD RESEARCH on the validity of résumés in selection</strong>, although
              research has <strong>consistently shown they can lead to DISCRIMINATION on the part of the
              screener</strong> (Derous &amp; Ryan, 2019; Zaniboni et al., 2019).
            </li>
            <li>
              <strong>The fix:</strong> online <strong>pre-formatted résumé builders</strong> asking applicants to
              complete <strong>specific fields</strong> about job-related background, so employers get{' '}
              <strong>consistent and job-related information about ALL applicants</strong> and résumés can be{' '}
              <strong>scanned for keywords</strong>.
            </li>
          </ul>
        </Card>

        <Card title="Reference and background checks">
          <ul className="list-disc pl-5 space-y-1.5 text-sm">
            <li>
              <strong>76 percent of employers</strong> used some kind of reference or background check to screen
              employees (SHRM, 2010 poll).
            </li>
            <li>
              They make sense for <strong>verifying information</strong> or ensuring there are no{' '}
              <strong>&ldquo;red flags&rdquo; regarding the safety of hiring an individual</strong>, and for
              avoiding <strong>NEGLIGENT HIRING</strong> — the hiring of an applicant who might, for example,{' '}
              <strong>hurt other people</strong>.
            </li>
            <li>
              <strong>But the case for their use as an ACTUAL PREDICTOR of work performance is LESS CLEAR.</strong>{' '}
              The core problem: <strong>applicants tend to SELECT THEIR OWN REFEREES based on who will be most
              POSITIVE about them, avoiding people who might identify problems.</strong>
            </li>
            <li>
              <strong>Aamodt (2016)</strong> guidance on criminal background checks: ensure{' '}
              <strong>no alternative procedures with LESS adverse impact are available</strong>, and ensure{' '}
              <strong>applicants have a chance to RESPOND</strong> if eliminated.
            </li>
            <li>
              <strong>Over 30 US states</strong> have enacted <strong>&ldquo;BAN THE BOX&rdquo;</strong> laws
              preventing employers from asking about criminal history on a job application; the purpose is{' '}
              <strong>to allow those with a criminal history to obtain employment</strong> (Maurer, 2018).
            </li>
          </ul>
        </Card>
      </>
    )
  },

  // ------------------------------------------------------------------ 17
  {
    id: 'physical-credit-interests',
    title: 'Physical Ability Tests, Credit History & Vocational Interests',
    subtitle: 'Three procedures with distinctive adverse impact profiles',
    content: (
      <>
        <Card title="Physical ability tests">
          <p className="text-sm">
            <strong>Glossary:</strong> <em>tests developed to assess dimensions like endurance or explosive
            strength for physically demanding jobs</em> (e.g., firefighter). <strong>Hogan (1991)</strong> noted
            two broad dimensions may capture most job-related physical demands:{' '}
            <strong>muscular strength/endurance</strong> and <strong>physical skill in movements</strong>.
          </p>
          <Table
            headers={['Approach (Baker & Gebhardt, 2012)', 'What it does']}
            rows={[
              [
                <strong key="1">Construct-based tests</strong>,
                'Designed to measure the CONSTRUCTS required by the job (such as those identified by Hogan) — e.g., the CARDIOVASCULAR FITNESS of the applicant.'
              ],
              [
                <strong key="2">Simulation-like exams</strong>,
                'HIGH FACE VALIDITY for applicants. A firefighter applicant might DRAG A DUMMY the size of a typical person or HAUL EQUIPMENT UP FLIGHTS OF STAIRS.'
              ]
            ]}
          />
          <Callout kind="warn" title="The training caveat and the job analysis requirement">
            <strong>Take into account whatever training applicants would receive ON THE JOB.</strong> If new hires
            receive significant physical training after hire leading to significant improvement,{' '}
            <strong>it would NOT be appropriate to expect applicants (who are pre-training) to perform at that
            level</strong>. In either approach, <strong>JOB ANALYSIS IS KEY in assuring what the minimum
            requirements actually are.</strong>
          </Callout>
          <Callout kind="danger" title="Adverse impact against women — and the Chicago case">
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                One approach to reducing adverse impact: <strong>offer physical training to ALL applicants and
                encourage them to take it</strong> — although <strong>improvements in women&rsquo;s performance
                may be MINIMAL</strong> (Courtright et al., 2013).
              </li>
              <li>
                <strong>It may be IMPOSSIBLE to eliminate adverse impact for some physical ability tests short of
                REDESIGNING THE JOB ITSELF</strong> to reduce its physical requirements.
              </li>
              <li>
                The <strong>EEOC cautions employers</strong> to use these tests carefully and ensure they are{' '}
                <strong>truly job related and NOT ARBITRARY</strong>.
              </li>
              <li>
                <strong>The Chicago fire department lawsuit:</strong> the passing score on the test was{' '}
                <strong>65 out of 100</strong>, but the city used a <strong>CUT-OFF SCORE OF 89</strong>, resulting
                in <strong>90 percent of MALE but only 19 percent of FEMALE applicants passing</strong>. The suit
                settled for <strong>almost $2 million</strong>, with the city adopting a new physical ability test
                (Byrne, 2013).
              </li>
            </ul>
          </Callout>
        </Card>

        <Card title="Credit history">
          <p className="text-sm">
            <strong>The employer assumption:</strong> poor credit scores are associated with negative employee
            behaviors such as theft. <strong>The concern:</strong> especially in an economic downturn, a
            person&rsquo;s credit may have been <strong>damaged by factors OUTSIDE their control</strong> (e.g.,
            job loss).
          </p>
          <Callout kind="danger" title="Bernerth et al. (2012) — three counterintuitive findings">
            <ol className="list-decimal pl-5 space-y-1">
              <li>
                A <strong>strong credit score was associated with HIGH CONSCIENTIOUSNESS — but ALSO with LOW
                AGREEABLENESS.</strong>
              </li>
              <li>
                Although credit scores were associated with <em>some</em> job performance dimensions, they were{' '}
                <strong>NOT associated with WORKPLACE DEVIANCE</strong> — undercutting the whole rationale for
                using them.
              </li>
              <li>
                Because <strong>Blacks and Hispanics tend to have LOWER credit scores than Whites</strong>,{' '}
                <strong>adverse impact is a concern</strong>.
              </li>
            </ol>
            <p className="mt-2 text-sm">
              <strong>Recommendation:</strong> organizations should carefully consider which jobs use credit
              scores, be prepared to <strong>demonstrate their validity</strong>, and{' '}
              <strong>demonstrate that measures with LESS adverse impact were not available</strong>. At least{' '}
              <strong>nine US states</strong> have passed legislation restricting the use of credit reports for
              hiring (Rivlin, 2013). If used, credit checks should be shown{' '}
              <strong>relevant to a particular job (e.g., work in the financial industry)</strong> and examined for
              adverse impact.
            </p>
          </Callout>
        </Card>

        <Card title="Vocational interests">
          <p className="text-sm">
            <strong>What they are:</strong> they <strong>tap into a person&rsquo;s PREFERENCES for certain types
            of work or work environments</strong> (Van Iddekinge et al., 2011). Inventories measure dimensions such
            as <strong>social, artistic, and conventional</strong>.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
            <li>
              There has been <strong>a substantial body of research in the VOCATIONAL COUNSELING literature for
              many years</strong> (Holland, 1959), but <strong>I-O psychology generally IGNORED vocational
              interests as a SELECTION topic for many years</strong> (Sackett et al., 2017a).
            </li>
            <li>
              <strong>Van Iddekinge et al.</strong>, using a <strong>MILITARY sample</strong>, found vocational
              interests <strong>were related to job performance</strong>.
            </li>
            <li>
              They also had <strong>relatively LOW adverse impact — &ldquo;a real plus.&rdquo;</strong>
            </li>
            <li>
              <strong>More research is needed</strong>, but the study illustrates that they{' '}
              <strong>may hold promise for making hiring decisions</strong>.
            </li>
          </ul>
        </Card>
      </>
    )
  },

  // ------------------------------------------------------------------ 18
  {
    id: 'summary-table-current',
    title: 'Table 6.6: The Master Validity Table & Current Issues',
    subtitle: 'Every validity coefficient in one place, plus AI, social media, and testing platforms',
    images: [
      {
        src: `${IMG}/06n_table6-6_selection_validity_summary_p1.png`,
        alt: 'Table 6.6 part 1: summary of key selection procedures with validity and comments — cognitive ability .51, personality tests up to .25, integrity tests .47, unstructured interviews .33, structured interviews .44, work samples .54.',
        caption: 'Table 6.6 (part 1) — Cognitive ability through work samples.'
      },
      {
        src: `${IMG}/06o_table6-6_selection_validity_summary_p2.png`,
        alt: 'Table 6.6 part 2: assessment centers .45, situational judgment tests .19 to .43, biodata .37 to .52, with the meta-analytic sources listed beneath.',
        caption: 'Table 6.6 (part 2) — Assessment centers, SJTs, and biodata, with meta-analytic sources.'
      }
    ],
    content: (
      <>
        <Callout kind="danger" title="If you memorize one thing in Chapter 6, memorize this table">
          <Table
            headers={['Selection procedure', 'Validity', 'Key comments']}
            rows={[
              [
                <strong key="1">Work Samples</strong>,
                <strong key="1v">.54</strong>,
                'HIGH validity. Preferred by applicants. COSTLIER to administer than other predictors.'
              ],
              [
                <strong key="2">Cognitive Ability (g)</strong>,
                <strong key="2v">.51</strong>,
                'High validity and LOW COST. Has ADVERSE IMPACT against some ethnic groups.'
              ],
              [
                <strong key="3">Integrity Tests</strong>,
                <strong key="3v">.47</strong>,
                'Typically used to "SELECT OUT" job applicants. Appears to have LOW adverse impact. Meta-analytic findings on validity VARY.'
              ],
              [
                <strong key="4">Assessment Centers</strong>,
                <strong key="4v">.45</strong>,
                'Frequently used for MANAGERIAL assessment. COSTLY to administer. Can also be used to provide FEEDBACK FOR DEVELOPMENT.'
              ],
              [
                <strong key="5">Structured Interviews</strong>,
                <strong key="5v">.44</strong>,
                'HIGHER validity than unstructured. Preferred by applicants. Situational = hypothetical situations; Behavioral = previous experiences.'
              ],
              [
                <strong key="6">Unstructured Interviews</strong>,
                <strong key="6v">.33</strong>,
                'MODEST validity compared to structured. May be useful for measuring certain characteristics. Preferred by applicants.'
              ],
              [
                <strong key="7">Biodata</strong>,
                <strong key="7v">.37–.52</strong>,
                'UP-FRONT DEVELOPMENT COSTS but relatively INEXPENSIVE TO ADMINISTER.'
              ],
              [
                <strong key="8">Situational Judgment Tests</strong>,
                <strong key="8v">.19–.43</strong>,
                'Perceived POSITIVELY by applicants, LESS COSTLY than other work sample-like assessments.'
              ],
              [
                <strong key="9">Personality Tests (Big Five)</strong>,
                <strong key="9v">Up to .25</strong>,
                'CONSCIENTIOUSNESS is the most consistent predictor of the Big Five. LOWER validity than other predictors but INEXPENSIVE and relatively LOW ADVERSE IMPACT. Validity improved by an "AT WORK" frame of reference. SUBTRAITS may be considered instead of broad factors.'
              ]
            ]}
          />
          <p className="mt-2 text-xs">
            (Table 6.6 lists these in the order: cognitive ability, personality, integrity, unstructured
            interviews, structured interviews, work samples, assessment centers, SJTs, biodata. The ranking above
            reorders by validity so the hierarchy is visible.) Meta-analytic sources: Arthur et al. (2003);
            Christian et al. (2010); Hunter &amp; Hunter (1994); McDaniel et al. (1994); Ones et al. (1993);
            Schmidt &amp; Hunter (1998); Shaffer &amp; Postlethwaite (2012); Van Iddekinge et al. (2012); Vinchur
            et al. (1998).
          </p>
        </Callout>

        <Card title="Global Implications">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Multinational organizations must consider the <strong>EQUIVALENCY of their assessments across
              different cultures and languages</strong> (see translation and back-translation, Ch. 2) and{' '}
              <strong>the LEGALITY of selection procedures in different countries&rsquo; legal contexts</strong>.
            </li>
            <li>
              <strong>The US legal system has largely influenced selection research for the last 50 years.</strong>{' '}
              The authors anticipate growth in multinational companies will push selection research and practice
              toward a <strong>broader focus</strong> on legal and application issues relevant elsewhere.
            </li>
          </ul>
        </Card>

        <Callout kind="danger" title="Current Workplace Issues — the social networking verdict">
          <p className="mb-2">
            The chapter reaches an unusually direct recommendation, so expect an MCQ on it.
          </p>
          <Table
            headers={['Study', 'Finding']}
            rows={[
              [
                'Van Iddekinge et al. (2016)',
                'Recruiters rated the FACEBOOK PAGES of college graduates. The ratings were NOT PREDICTIVE of the graduates’ later job performance — and they TENDED TO FAVOR FEMALE AND WHITE APPLICANTS, raising fairness questions.'
              ],
              [
                'Zhang et al. (2020)',
                'Information from PERSONAL social networking sites often provides DEMOGRAPHIC DATA THAT ARE PROHIBITED for use in hiring decisions by US law — and recruiters’ ratings DO NOT PREDICT job performance.'
              ],
              [
                'Roulin & Levashina (2019)',
                'By contrast, recruiter ratings of LINKEDIN pages may provide RELIABLE AND VALID information about applicant PERSONALITY and COGNITIVE ABILITY, have LOW ADVERSE IMPACT, and can PREDICT CAREER SUCCESS.'
              ]
            ]}
          />
          <p className="mt-2 font-semibold">
            The authors&rsquo; recommendation: <strong>employers should AVOID using information from PERSONAL
            social networking websites to make hiring decisions</strong>, and job applicants should carefully
            consider what they include about themselves online. <strong>WORK-RELATED social networking sites (e.g.,
            LinkedIn) may be useful</strong> because they are more likely to provide job-related information
            (Hartwell &amp; Campion, 2020).
          </p>
        </Callout>

        <Card title="Testing platforms and gamification">
          <ul className="list-disc pl-5 space-y-1.5 text-sm">
            <li>
              Tests are now administered on <strong>paper, laptop computer, or mobile devices such as smart phones
              and tablets</strong>. The question: are scores <strong>COMPARABLE</strong> across methods?
            </li>
            <li>
              <strong>Recent findings suggest a range of tests (cognitive, non-cognitive, SJT) are ESSENTIALLY
              EQUIVALENT when administered by computers and mobile devices</strong> (Brown &amp; Grossenbacher,
              2017; Illingworth et al., 2015; Morelli et al., 2014).
            </li>
            <li>
              A number of vendors have developed <strong>selection tests formatted as GAMES</strong>, meant to{' '}
              <strong>engage test-takers, REDUCE FAKING, and take very little time</strong> (Nikolaou et al.,
              2019). Georgiou et al. (2019) describe an <strong>SJT that used a game format</strong>.
            </li>
          </ul>
        </Card>

        <Callout kind="warn" title="Current Research Issues — technology is outpacing the research">
          Reviews (Gonzalez et al., 2019; K&ouml;nig et al., 2020; Woods et al., 2020) note that{' '}
          <strong>the technology of selection practice is FAR OUTPACING THE RESEARCH</strong>. Even as these
          technologies are adopted, <strong>we often know little about</strong>:
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>their <strong>validity</strong>,</li>
            <li>whether <strong>candidates find them acceptable and fair</strong>,</li>
            <li>whether they <strong>pass legal muster</strong>, and</li>
            <li>whether they may have <strong>adverse impact against different groups</strong>.</li>
          </ul>
          <p className="mt-2">
            <strong>Many employers are likely unaware of these potential issues.</strong> The reviews point to the
            critical importance of <strong>I-O psychologists and DATA SCIENTISTS working closely together</strong>{' '}
            to harness the selection science amassed over the last 100 years —{' '}
            <em>&ldquo;a significant challenge for the field of I-O psychology, but also an opportunity.&rdquo;</em>
          </p>
        </Callout>
      </>
    )
  }
];
