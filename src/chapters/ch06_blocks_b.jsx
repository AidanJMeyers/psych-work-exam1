import React from 'react';
import { Callout, Table, Card } from '../components/Visual.jsx';

const IMG = 'ch06_personnel_selection';

// Blocks 7-12 of Chapter 6 (personality issues → interviews)
export default [
  // ------------------------------------------------------------------ 7
  {
    id: 'personality-issues',
    title: 'Four Issues in Using Personality Tests',
    subtitle: '"At work" frame of reference, facets, faking, and optimal levels',
    content: (
      <>
        <Callout kind="danger" title="The chapter names exactly four — expect a which-is-NOT-one-of item">
          <strong>(1) An &ldquo;at work&rdquo; frame of reference, (2) the use of subtraits or facets of the Big
          Five, (3) faking, and (4) looking for the optimal level of personality to fit the job.</strong>
        </Callout>

        <Card title="1. The at-work frame of reference — the simplest validity boost in the chapter">
          <p className="text-sm">
            <strong>What it is:</strong> simply telling test-takers to <em>&ldquo;think about how you are or
            behave at work,&rdquo;</em> or <strong>adding the phrase &ldquo;at work&rdquo; to each test
            item</strong>. <strong>It increases the validity of the test.</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
            <li>
              <strong>Hunthausen et al. (2003):</strong> simply asking <strong>airline ticket-counter
              employees</strong> to think about how they are at work while completing a Big Five test{' '}
              <strong>increased the test&rsquo;s validity</strong> in explaining job performance.
            </li>
            <li>
              <strong>Why it works:</strong> people <strong>behave somewhat differently in different
              contexts</strong> — at home, at work, among friends. Providing a context tells test-takers which
              context to think about, and it <strong>better ALIGNS the test questions with the criterion we want
              to predict — performance at work</strong> (Lievens et al., 2008).
            </li>
            <li>
              <strong>Shaffer &amp; Postlethwaite (2012)</strong> confirmed this frame-of-reference effect
              meta-analytically. It is now <strong>generally accepted that an &ldquo;at work&rdquo; frame of
              reference increases predictive validity</strong>.
            </li>
          </ul>
        </Card>

        <Card title="2. Subtraits / facets within the Big Five">
          <p className="text-sm">
            Each broad Big Five factor is <strong>made up of several &ldquo;subtraits.&rdquo;</strong>{' '}
            Conscientiousness includes <strong>achievement-striving</strong> and{' '}
            <strong>orderliness</strong> (Figure 6.6 lists six facets: orderliness, dutifulness,
            achievement-striving, self-discipline, cautiousness, self-efficacy).
          </p>
          <Callout kind="tip" title="The key judgment">
            <strong>&ldquo;While orderliness may certainly be important to certain types of jobs, ACHIEVEMENT is
            probably more important to the prediction of job performance in MOST jobs&rdquo;</strong> (Oswald
            &amp; Hough, 2011). Researchers and practitioners are realizing that{' '}
            <strong>greater prediction may be achieved by looking at SPECIFIC SUBTRAITS rather than the broad
            factors</strong>.
          </Callout>
        </Card>

        <Card title="3. Faking — a very active research area">
          <p className="text-sm mb-2">
            The concern: <strong>some applicants may be able to fake their scores</strong>. Research has examined
            three ways to &ldquo;catch&rdquo; or control faking:
          </p>
          <Table
            headers={['Method', 'How it works']}
            rows={[
              ['Warning test-takers about faking', 'Fan et al. (2012); Landers et al. (2011)'],
              ['Eye-track technology', 'The eye movements of the test-taker can be tracked (van Hooft & Born, 2012)'],
              ['Forced-choice items', 'The respondent must choose among SEEMINGLY EQUALLY DESIRABLE alternatives (Converse et al., 2010; Heggestad et al., 2006)']
            ]}
          />
          <Callout kind="danger" title="Three findings that complicate the faking-is-bad story">
            <ol className="list-decimal pl-5 space-y-1">
              <li>
                Although faking may affect the <strong>RELATIVE scores of individual applicants</strong> (how they
                score relative to each other), research suggests that{' '}
                <strong>over thousands of selection decisions in a large company, faking has MINIMAL EFFECTS ON
                VALIDITY</strong> (Hogan et al., 2007).
              </li>
              <li>
                It may be that <strong>applicants who fake BETTER UNDERSTAND what is expected of them on the job —
                a good thing.</strong>
              </li>
              <li>
                <strong>Marcus (2009)</strong> proposes reconceptualizing &ldquo;faking&rdquo; from the{' '}
                <strong>applicant&rsquo;s perspective</strong>: the applicant is mostly interested in{' '}
                <strong>positive SELF-PRESENTATION</strong>, and this{' '}
                <strong>should not necessarily be considered a bad thing</strong>. The chapter&rsquo;s rhetorical
                question: if an applicant really wanted a job, thoroughly understood what was needed, and tried to
                present their skills in that light, <em>&ldquo;would that necessarily be bad?&rdquo;</em>
              </li>
            </ol>
          </Callout>
        </Card>

        <Card title="4. Optimal levels — is more always better?">
          <p className="text-sm">
            Some researchers question whether there is a <strong>simple LINEAR relationship</strong> between
            personality and job performance. <em>&ldquo;We have generally assumed that conscientiousness is a good
            thing, and that more of it is better. But this may not be the case&hellip;a person may at some point be
            TOO CONSCIENTIOUS.&rdquo;</em>
          </p>
          <p className="text-sm mt-2">
            <strong>Carter et al. (2014)</strong> suggests there may be <strong>OPTIMAL LEVELS of personality
            traits such as conscientiousness, and that MORE IS NOT ALWAYS BETTER.</strong>
          </p>
        </Card>
      </>
    )
  },

  // ------------------------------------------------------------------ 8
  {
    id: 'other-personality',
    title: 'Other Personality Constructs',
    subtitle: 'Proactive personality, adaptability, EI, core self-evaluations, and HEXACO',
    content: (
      <>
        <Table
          headers={['Construct', 'Definition', 'Evidence & status']}
          rows={[
            [
              <strong key="p">Proactive personality</strong>,
              'The tendency to RECOGNIZE AND ACT ON OPPORTUNITIES in the environment (Bateman & Crant, 1993).',
              'Crant (1995) found it predicted the SALES PERFORMANCE OF REAL ESTATE AGENTS — and predicted OVER AND ABOVE conscientiousness and extraversion, suggesting it is DIFFERENT from those traits. An active research topic in many areas of I-O.'
            ],
            [
              <strong key="a">Adaptability</strong>,
              'A person’s tendency to ADJUST THEMSELVES TO NEW SITUATIONS (Ployhart & Bliese, 2006). Includes LEARNING adaptability, INTERPERSONAL adaptability, and CULTURAL adaptability.',
              'Adaptive BEHAVIORS have been an important performance CRITERION for years (Ch. 4), but adaptability has received LESS RESEARCH AS A PERSONALITY TRAIT, and there are RELATIVELY FEW STUDIES tying it to job performance. The authors anticipate growing interest as 21st-century work keeps changing.'
            ],
            [
              <strong key="e">Emotional intelligence (EI)</strong>,
              'Defined by SOME researchers as more of a COGNITIVE SOCIAL SKILL; others focus on its NON-COGNITIVE (personality-like) properties. Used to predict social skills at work.',
              'Despite intuitive appeal, there is QUESTION as to whether EI is DIFFERENT from existing measures of personality and cognitive ability, and thus whether it predicts performance OVER AND ABOVE them. One possibility: EI is a good predictor ONLY for jobs requiring a good bit of "EMOTIONAL LABOR," where one’s true emotions and the emotions required on the job do not necessarily match (Joseph & Newman, 2010).'
            ],
            [
              <strong key="c">Core self-evaluations (CSE)</strong>,
              'A combination of FOUR traits: SELF-ESTEEM, LOCUS OF CONTROL, SELF-EFFICACY, and NEUROTICISM. Described as the "bottom-line evaluations that people make of themselves."',
              'Judge (2009) points to evidence that CSE predicts job performance — and PERHAPS BETTER THAN EACH of these individual difference variables by themselves.'
            ],
            [
              <strong key="h">HEXACO</strong>,
              'A model proposing a SIXTH dimension beyond the Big Five: HONESTY/HUMILITY, including SINCERITY, FAIRNESS, and LACK OF GREED (Ashton & Lee, 2007). H = Honesty/Humility, E = Emotionality, X = eXtraversion, A = Agreeableness, C = Conscientiousness, O = Openness.',
              'The issue of whether there actually IS a sixth factor is "FAR FROM SETTLED."'
            ]
          ]}
        />

        <Callout kind="tip" title="Where HEXACO comes back">
          Keep honesty/humility in mind for the next block:{' '}
          <strong>the validity of PERSONALITY-BASED integrity tests may be best explained by honesty/humility from
          HEXACO</strong>, while <strong>OVERT integrity tests are better explained by the Big Five</strong>.
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 9
  {
    id: 'integrity-tests',
    title: 'Integrity Tests',
    subtitle: 'Overt vs. personality-based, the .47 validity, and the Van Iddekinge controversy',
    images: [
      {
        src: `${IMG}/06i_table6-2_integrity_test_items.png`,
        alt: 'Table 6.2: examples of integrity test items. Personality-based (covert) items include "I work quickly rather than paying attention to rules and details" and "I look for excitement and thrills at work." Overt items include "I would hit someone if they insulted me" and "I have used marijuana while at work."',
        caption: 'Table 6.2 — Examples of personality-based (covert) versus overt integrity test items.'
      }
    ],
    content: (
      <>
        <p>
          <strong>Integrity tests</strong> — glossary: <em>tests developed to predict a number of negative and
          counterproductive employee behaviors such as theft, malingering, drug use, and aggression.</em>
        </p>

        <Callout kind="danger" title="Where integrity tests came from — a date to remember">
          Their growing popularity <strong>&ldquo;stems from the OUTLAWING OF POLYGRAPH or LIE DETECTOR TESTS in
          the 1980s,&rdquo;</strong> which until then had been used to predict these negative employee behaviors.
          Self-report integrity tests filled that gap.
        </Callout>

        <Table
          headers={['Type', 'How it works', 'Sample items (Table 6.2)', 'Best explained by…']}
          rows={[
            [
              <strong key="o">Overt integrity tests</strong>,
              'DIRECTLY ASK the test-taker about issues like their theft, illegal drug use, or fighting.',
              '"I would hit someone if they insulted me." "I have used marijuana while at work." "I would call in sick if I didn’t feel like coming to work that day."',
              'The BIG FIVE personality framework (Marcus et al., 2007)'
            ],
            [
              <strong key="p">Personality-based (covert) integrity tests</strong>,
              'Predict negative work behaviors through PERSONALITY-TYPE QUESTIONS whose PURPOSE MAY NOT BE OBVIOUS to the test-taker.',
              '"I work quickly rather than paying attention to rules and details." "I look for excitement and thrills at work." "I prefer to get along with other people" [reverse scored].',
              'HONESTY/HUMILITY from the HEXACO framework (Marcus et al., 2007)'
            ]
          ]}
        />

        <Callout kind="info" title="From a Big Five standpoint">
          Personality-based integrity tests are generally a function of the Big Five factors of{' '}
          <strong>conscientiousness, agreeableness, and neuroticism</strong> (Sackett &amp; Wanek, 1996).
        </Callout>

        <Callout kind="danger" title="The validity numbers — memorize both">
          <Table
            headers={['Finding', 'Value', 'Source']}
            rows={[
              [
                'Average validity for predicting COUNTERPRODUCTIVE WORK BEHAVIORS (theft, absenteeism, tardiness, violence)',
                <strong key="1">.47</strong>,
                'Ones, Viswesvaran & Schmidt (1993), a large meta-analytic study'
              ],
              [
                'Predictive validity for SUPERVISORY RATINGS OF PERFORMANCE — HIGHER than that of personality tests',
                <strong key="2">.41</strong>,
                'Ones & Viswesvaran (2001)'
              ]
            ]}
          />
        </Callout>

        <Card title="Four supporting findings">
          <ul className="list-disc pl-5 space-y-1.5 text-sm">
            <li>
              Meta-analyses find integrity tests <strong>COMPLEMENT cognitive tests</strong>: using cognitive +
              integrity tests <strong>together</strong> predicts job performance well, across a range of job types
              (Ones et al., 1993; Schmidt &amp; Hunter, 1998).
            </li>
            <li>
              A study of <strong>over 700,000 applicants</strong> found integrity tests have{' '}
              <strong>relatively LOW ADVERSE IMPACT against ethnic minorities</strong> (Ones &amp; Viswesvaran,
              1998).
            </li>
            <li>
              Reviews consistently show integrity tests <strong>predict NON-THEFT counterproductive work behavior
              well</strong> (Berry et al., 2007).
            </li>
            <li>
              They are <strong>valid outside the US</strong> — Argentina, Mexico, South Africa (Fortmann et al.,
              2002), and Canada and Germany (Marcus et al., 2007) — and appear{' '}
              <strong>legally defensible</strong>.
            </li>
          </ul>
        </Card>

        <Callout kind="warn" title="Three complications">
          <ol className="list-decimal pl-5 space-y-1.5">
            <li>
              <strong>Criterion problems:</strong> validating integrity tests may require criteria{' '}
              <strong>not always measured or readily available — particularly THEFT</strong>. (Compare Ch.
              4&rsquo;s point that it is hard to detect theft, much less attribute it.)
            </li>
            <li>
              <strong>Faking:</strong> there is concern items may be susceptible to{' '}
              <strong>faking and response distortion</strong>, and research continues on detecting and reducing it
              (Berry et al., 2007).
            </li>
            <li>
              <strong>The validity controversy.</strong> A meta-analysis by{' '}
              <strong>Van Iddekinge et al. (2012)</strong> CHALLENGED integrity test validity, noting they{' '}
              <strong>predicted relatively small portions of the variance</strong>.{' '}
              <strong>Ones et al. (2012b)</strong> replied that Van Iddekinge&rsquo;s list of studies{' '}
              <strong>was not sufficiently comprehensive and included measures that were not actually integrity
              tests</strong>. Commenting on both, <strong>Sackett and Schmitt (2012)</strong> concluded that{' '}
              <strong>integrity tests probably ARE sufficiently valid for predicting important outcomes, but more
              research is needed.</strong>
            </li>
          </ol>
        </Callout>

        <Callout kind="tip" title="How integrity tests are actually used">
          <strong>&ldquo;They are used largely by employers to &lsquo;SELECT OUT&rsquo; candidates who might be
          difficult on the job&rdquo;</strong> — a screening-out tool rather than a ranking tool. Note the
          Workplace Application: a published study reported a{' '}
          <strong>statistically significant decrease in workers&rsquo; compensation claims at a large hotel
          chain</strong> after adopting an integrity test (Sturman &amp; Sherwyn, 2009). Critics note the test{' '}
          <strong>may weed out people who are not necessarily high-risk</strong>.
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 10
  {
    id: 'interviews-types',
    title: 'Interviews: Unstructured, Situational & Behavioral',
    subtitle: 'The most-used selection procedure — and the structure that makes it work',
    images: [
      {
        src: `${IMG}/06j_table6-3_situational_behavioral_questions.png`,
        alt: 'Table 6.3: sample situational and behavioral interview questions for a customer service specialist, marketing specialist, and supervisor, contrasting "What would you do?" hypotheticals with "Think of a time when..." past-experience prompts.',
        caption: 'Table 6.3 — Sample situational versus behavioral interview questions for three jobs.'
      }
    ],
    content: (
      <>
        <Callout kind="danger" title="The headline fact">
          <strong>&ldquo;Undoubtedly, the interview is the MOST FREQUENTLY USED personnel selection procedure,
          used by both small and large employers.&rdquo;</strong> It is <em>&ldquo;hard to imagine making a
          selection decision without an interview of some sort.&rdquo;</em>
        </Callout>

        <Card title="What the interview does BESIDES assess KSAs">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Lets the <strong>applicant learn about the organization</strong> and whether the job and
              organization fit their needs and interests (Dipboye et al., 2012).
            </li>
            <li>
              Helps the interviewer <strong>&ldquo;SELL&rdquo; the job and organization</strong> to the applicant.
            </li>
            <li>
              Provides a <strong>realistic job preview (RJP)</strong> — glossary:{' '}
              <em>a preview to the applicant about what the job is like, BOTH GOOD AND BAD.</em>
            </li>
          </ul>
          <p className="text-sm mt-2">
            Definition of the interview itself: <strong>an interpersonal interaction between a job candidate and
            one or more company representatives/interviewers, in which the goal is to learn whether the applicant
            has the appropriate KSAs to match the job.</strong> Traditionally face-to-face, but also online and by
            telephone.
          </p>
        </Card>

        <Callout kind="danger" title="Unstructured vs. structured — the historical turning point">
          <p>
            <strong>For many years the research on the selection interview was NEGATIVE</strong> — it was
            generally concluded that the interview had <strong>low predictive validity</strong> (Arvey &amp;
            Campion, 1982). <strong>Part of the problem was that most interviews were UNSTRUCTURED.</strong>
          </p>
          <Table
            headers={['', 'Unstructured interview', 'Structured interview']}
            rows={[
              [
                <strong key="d">Glossary definition</strong>,
                'An interview that is like a CASUAL CONVERSATION between the interviewer and the job applicant. Different applicants can be asked VERY DIFFERENT questions, and the questions are OFTEN NOT JOB-RELATED.',
                'An interview process where job applicants are ALL ASKED THE SAME JOB-RELATED QUESTIONS.'
              ],
              [
                <strong key="v">Validity (McDaniel et al., 1994)</strong>,
                <strong key="v1">.33</strong>,
                <strong key="v2">.44</strong>
              ]
            ]}
          />
        </Callout>

        <Callout kind="danger" title="The two dominant structured formats — both introduced in the 1980s">
          <Table
            headers={['', 'Situational interview (Latham et al., 1980)', 'Behavioral interview (Janz, 1982)']}
            rows={[
              [
                <strong key="d">Definition</strong>,
                'A structured interview where applicants are asked job-related questions about HYPOTHETICAL situations.',
                'A structured interview where applicants are asked job-related questions about a PAST EXPERIENCE the applicant has had.'
              ],
              [
                <strong key="q">Customer service example</strong>,
                '"WHAT WOULD YOU DO if an angry customer called and started yelling at you about a problem they were having with the product?"',
                '"THINK ABOUT A TIME that an angry customer called and started yelling at you about a problem they were having with the company. HOW DID YOU HANDLE IT?"'
              ],
              [
                <strong key="l">Underlying logic</strong>,
                'Judgment about what one would do.',
                'Focus on PAST BEHAVIOR — based on the idea that THE BEST PREDICTOR OF FUTURE BEHAVIOR IS PAST BEHAVIOR.'
              ],
              [
                <strong key="m">What it seems to MEASURE (Levashina et al., 2014)</strong>,
                'JOB KNOWLEDGE and COGNITIVE ABILITY',
                'EXPERIENCE and some PERSONALITY DIMENSIONS'
              ]
            ]}
          />
        </Callout>

        <Callout kind="tip" title="Levashina et al.'s (2014) nuanced verdict">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Behavioral questions have SLIGHTLY HIGHER validity than situational questions for HIGH
              COMPLEXITY jobs.</strong>
            </li>
            <li>
              But <strong>either or both might be acceptable</strong>, since they{' '}
              <strong>really are measuring different things and could be good for different purposes</strong>.
            </li>
            <li>
              <strong>The situational interview may be more appropriate when applicants have relatively LITTLE
              EXPERIENCE</strong> — they have no past behavior to describe.
            </li>
            <li>
              <strong>Both are good choices</strong>, with higher predictive validity than the unstructured
              interview.
            </li>
          </ul>
        </Callout>

        <Callout kind="warn" title="Don't write off the unstructured interview entirely">
          Despite consistent meta-analytic evidence that <strong>more structure leads to higher validity</strong>,
          the unstructured interview may have its uses:
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Assessing <strong>interpersonal skills and factors like personality</strong> (Blackman, 2002).</li>
            <li>
              Seeing <strong>how well the applicant might FIT WITH THE GROUP</strong> (staying within legal
              guidelines — Ch. 7).
            </li>
            <li>Letting the <strong>interviewee ask questions</strong> about the job and company.</li>
          </ul>
          <p className="mt-2">
            The authors add that they are <em>&ldquo;doubtful that most hiring managers would be prepared to hire
            a prospective employee without some sort of interview to get to know them first.&rdquo;</em> Note also
            that Table 6.6 lists unstructured interviews as <strong>preferred by applicants</strong> — as are
            structured ones.
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 11
  {
    id: 'interview-structure-legal',
    title: 'Adding Structure & Interview Legal Issues',
    subtitle: 'Five ways to structure an interview, and what you may not ask',
    images: [
      {
        src: `${IMG}/06k_table6-4_interview_rating_scales.png`,
        alt: 'Table 6.4: sample interview rating scales. One organized by question, offering anchored responses 1, 3, and 5 for a scenario about working late versus attending a baseball game; another organized by KSA, with 1-to-5 scales for "Knowledge of company rules" and "Ability to set priorities."',
        caption: 'Table 6.4 — Sample interview rating scales, organized by question and organized by KSA.'
      }
    ],
    content: (
      <>
        <Callout kind="danger" title="The five ways to add structure (Campion et al., 1997; Chapman & Zweig, 2005; Williamson et al., 1997)">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Use the same, job-related questions for all applicants.</strong> Questions can be generated{' '}
              <strong>from the job analysis</strong> — from the <strong>tasks</strong>, from the{' '}
              <strong>KSAs</strong> needed, and from <strong>critical incidents</strong> generated during job
              analysis. <strong>SMEs</strong> can develop the questions or help construct them. The goal:{' '}
              <strong>an interview that adequately samples the job — that is, is CONTENT VALID.</strong>
            </li>
            <li>
              <strong>Develop standardized rating scales.</strong> Some can be organized around the{' '}
              <strong>KSAs</strong> that make up the job; others around the{' '}
              <strong>interview questions themselves</strong> (Table 6.4). Provide{' '}
              <strong>examples of different points on the rating scale</strong> (Melchers et al., 2011) so raters
              are consistent in evaluating applicants <em>and</em> consistent among themselves.
            </li>
            <li>
              <strong>Note-taking.</strong> Recommend it to interviewers so they can rely on notes when making
              ratings and when comparing their ratings with each other.
            </li>
            <li>
              <strong>Use multiple raters</strong> — one way to increase the{' '}
              <strong>consistency and accuracy</strong> with which applicants are rated.
            </li>
            <li>
              <strong>Train raters.</strong> Covering correct interviewing procedures, providing a{' '}
              <strong>frame of reference</strong>, how to use the rating scales, how to discuss differences
              between raters, and <strong>how to avoid biases such as HALO, SIMILARITY, and
              LENIENCY/SEVERITY</strong> (Ch. 5).
            </li>
          </ol>
          <p className="mt-2 text-sm">
            <strong>&ldquo;The more of these that can be included, the better interview validity is likely to
            be.&rdquo;</strong>
          </p>
        </Callout>

        <Callout kind="danger" title="Legal issues — three points">
          <ol className="list-decimal pl-5 space-y-1.5">
            <li>
              <strong>Structured interview approaches tend to lead to more POSITIVE LITIGATION OUTCOMES for
              employers</strong> — courts tend to rule in favor of organizations using more structured processes
              (Williamson et al., 1997).
            </li>
            <li>
              <strong>Adverse impact:</strong> most research shows interviews — <strong>particularly structured
              interviews — are relatively LOW in adverse impact</strong> (Moscoso, 2000), although some researchers
              note <strong>OLDER applicants may be treated differently</strong> in the interview (Morgeson et al.,
              2008).
            </li>
            <li>
              <strong>The most important legal issues concern WHICH QUESTIONS may and may not be asked</strong> —
              including questions regarding <strong>age, disability, citizenship, marital status, and whether the
              applicant has children</strong> (see the EEOC website).
            </li>
          </ol>
          <Callout kind="warn" title="The two crucial sub-points">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Even if the employer does not plan to USE this personal information in making a decision,
                it is ILLEGAL to ask a question that may cause the applicant to BELIEVE they will face
                discrimination.</strong>
              </li>
              <li>
                <strong>The employer IS still allowed to ask questions about whether the applicant is able to
                PERFORM THE KEY JOB TASKS.</strong>
              </li>
            </ul>
          </Callout>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 12
  {
    id: 'interview-current-research',
    title: 'What Interviews Measure & the Social Exchange',
    subtitle: 'Huffcutt’s meta-analysis, impression management, and interview advice',
    content: (
      <>
        <Callout kind="danger" title="Huffcutt et al. (2001) — what interviews actually measure">
          <p>
            Interviews <strong>primarily measure PERSONALITY and SOCIAL SKILLS</strong>, followed by{' '}
            <strong>MENTAL ABILITY and JOB KNOWLEDGE AND SKILLS</strong> — in that order.
          </p>
          <Table
            headers={['Interview type', 'What it assesses (per this meta-analysis)']}
            rows={[
              [<strong key="u">Unstructured</strong>, 'INTERESTS, EDUCATION, and EXPERIENCE'],
              [<strong key="s">Structured</strong>, 'JOB KNOWLEDGE, ORGANIZATIONAL FIT, and DECISION-MAKING']
            ]}
          />
          <p className="mt-2 text-sm">
            <strong>Part of the reason for the validity difference</strong> between unstructured and structured
            interviews is that <strong>structured interviews measure factors more strongly related to the
            job</strong>.
          </p>
        </Callout>

        <Card title="The interview as a social exchange — impression management (IM)">
          <p className="text-sm mb-2">
            <strong>From the INTERVIEWER side:</strong> interviewers engage in a range of IM behaviors to{' '}
            <strong>send signals to applicants</strong> — signaling the{' '}
            <strong>attractiveness of the organization, warmth, their own professionalism, or their own
            superiority</strong> (Wilhelmy et al., 2016).
          </p>
          <Table
            headers={['From the APPLICANT side (Bourdage et al., 2018)', 'Examples', 'Outcome']}
            rows={[
              [
                <strong key="h">Honest IM</strong>,
                'SELF-PROMOTION (making sure the interviewer knows your skills) and INGRATIATION (trying to find shared views with the interviewer)',
                <strong key="h2">Related to HIGHER interviewer ratings</strong>
              ],
              [
                <strong key="d">Deceptive IM</strong>,
                'Telling FICTIONAL STORIES about yourself; NOT STATING THE TRUE REASON for leaving a previous job',
                <strong key="d2">Related to being ELIMINATED LATER in the hiring process — EVEN IF they scored well on the initial interview</strong>
              ]
            ]}
          />
        </Card>

        <Callout kind="tip" title="Two more interview research findings">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Some interviewees can <strong>figure out which dimensions are being measured</strong> by the
              questions, and <strong>those applicants tend to SCORE HIGHER</strong> (Klehe et al., 2008).
            </li>
            <li>
              <strong>Unstructured interviews are MORE SUSCEPTIBLE to applicants&rsquo; impression management
              tactics</strong> (Barrick et al., 2009). Research has also examined{' '}
              <strong>job applicant anxiety</strong> in the interview (McCarthy &amp; Goffin, 2004).
            </li>
          </ul>
        </Callout>

        <Card title="Research-supported advice for your own interviews (Dipboye et al., 2012)">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <strong>Spelling errors on r&eacute;sum&eacute;s can create a bad impression with
              recruiters</strong> (Martin-Lacroux, 2017).
            </li>
            <li>Wear <strong>clothes appropriate to the job</strong> for which you are applying.</li>
            <li>Be <strong>properly groomed</strong>.</li>
            <li>
              <strong>Smile appropriately, make good eye contact, and show a reasonably relaxed posture.</strong>
            </li>
          </ul>
        </Card>

        <Callout kind="info" title="Technology & I-O — asynchronous video interviews and AI scoring">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Online interviews are becoming the norm</strong> — perhaps even more so since the Covid-19
              pandemic. Many employers have applicants <strong>video record interviews to be viewed and scored
              later</strong>, called <strong>ASYNCHRONOUS VIDEO INTERVIEWS</strong>.
            </li>
            <li>
              Some companies now use <strong>AI to SCORE these video interviews</strong> (e.g.,{' '}
              <strong>Unilever</strong>, per Booth, 2019).
            </li>
            <li>
              <strong>Proponents argue</strong> AI scoring saves recruiter costs, provides insights human
              interviewers might miss (e.g., <strong>voice intonation, eye tracking</strong>), and can even{' '}
              <strong>eliminate bias</strong>.
            </li>
            <li>
              <strong>Critics argue</strong> bias may not be so easily eliminated, since{' '}
              <strong>many algorithms simply REFLECT PAST, POSSIBLY BIASED DECISIONS</strong>.
            </li>
            <li>
              <strong>Preliminary research:</strong> applicants generally <strong>PREFER FACE-TO-FACE interviews
              over asynchronous ones</strong> — but <strong>many concerns can be significantly REDUCED by
              EXPLAINING the use of asynchronous video interviews to applicants</strong> (Basch &amp; Melchers,
              2019).
            </li>
          </ul>
        </Callout>
      </>
    )
  }
];
