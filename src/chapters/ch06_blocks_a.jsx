import React from 'react';
import { Callout, Table, Card } from '../components/Visual.jsx';

const IMG = 'ch06_personnel_selection';

// Blocks 1-6 of Chapter 6 (terminology → personality tests)
export default [
  // ------------------------------------------------------------------ 1
  {
    id: 'selection-terminology',
    title: 'Key Terminology & Why Selection Gets Two Chapters',
    subtitle: 'Predictors, validity coefficients, and the individual-differences assumption',
    content: (
      <>
        <Callout kind="danger" title="Three definitions to lock down first">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Personnel selection procedures</strong> — glossary: <em>a wide range of instruments that
              organizations can use to predict job performance. This includes tests and other types of
              assessments such as job interviews, assessment centers, and simulations.</em>{' '}
              <strong>&ldquo;Personnel selection procedure&rdquo; and &ldquo;predictor&rdquo; are the UMBRELLA
              TERMS</strong> for the whole range of assessments used to hire people.
            </li>
            <li>
              <strong>Validity</strong>, in this chapter, refers to the <strong>validity coefficient based on
              criterion-related validity</strong>: the degree of relationship, expressed as a{' '}
              <strong>correlation</strong>, between the predictor and the job performance criterion. Saying a
              procedure&rsquo;s validity is <strong>.40</strong> means it is <strong>correlated .40 with the job
              performance criterion</strong>.
            </li>
            <li>
              <strong>The basic assumption of personnel selection:</strong> assess{' '}
              <strong>individual differences</strong> — via a test or interview — to see whether they{' '}
              <strong>predict an employee&rsquo;s job performance</strong>. Those individual differences are{' '}
              <strong>generally identified through a JOB ANALYSIS</strong> (Ch. 3).
            </li>
          </ul>
        </Callout>

        <Card title="Why selection takes two chapters — the three reasons">
          <ol className="list-decimal pl-5 space-y-1.5 text-sm">
            <li>
              <strong>Personnel selection is the LARGEST area of practice in I-O psychology.</strong> Many I-O
              psychologists help organizations identify and develop selection procedures and ensure they meet
              professional guidelines.
            </li>
            <li>
              <strong>Legal implications.</strong> Since the <strong>1964 Civil Rights Act</strong>, selection
              procedures have been held to a <strong>higher level of scrutiny than most other HR
              practices</strong>. Organizations spend heavily to ensure procedures are both{' '}
              <strong>valid</strong> and <strong>legally compliant</strong>.
            </li>
            <li>
              <strong>It is one of the most well-developed research areas in I-O</strong>, with research
              accumulating since the early twentieth century (Vinchur &amp; Bryan, 2012). It is{' '}
              <em>&ldquo;probably the area of I-O psychology that has generated the most research of all.&rdquo;</em>
            </li>
          </ol>
          <p className="text-sm mt-2">
            The chapter also flags that selection is <strong>changing more rapidly in the last 20 years than in
            the last century</strong>, due to profound technological change.
          </p>
        </Card>

        <Callout kind="warn" title="A caution the authors add">
          <strong>Not all employers know about this research and the resulting best practices</strong> — so{' '}
          &ldquo;you will likely encounter some selection procedures that are not very good.&rdquo;
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 2
  {
    id: 'formats',
    title: 'Formats of Selection Procedures',
    subtitle: 'Six format distinctions — paper/online, individual/group, speed/power, cognitive/non-cognitive',
    content: (
      <>
        <Table
          headers={['Format', 'Definition', 'Notes']}
          rows={[
            [
              <strong key="1">Paper-and-pencil tests</strong>,
              'Tests administered to job applicants in paper format.',
              'Literally administered on paper with pencil so answers are easily scored. Many use a MULTIPLE-CHOICE format. Many are now delivered online instead.'
            ],
            [
              <strong key="2">Unproctored Internet testing</strong>,
              'When tests are administered online so that a person might take the test AT HOME or at some location AWAY FROM A REPRESENTATIVE of the organization.',
              'Convenient and commonplace, but raises concerns about CHEATING and TEST SECURITY. One solution: use it only as an INITIAL APPLICANT SCREENING followed by other procedures (Ployhart et al., 2017). Some vendors use REMOTE PROCTORING — a person observing remotely, or video recordings reviewed later.'
            ],
            [
              <strong key="3">Individually administered procedures</strong>,
              'Procedures administered to ONE applicant at a time (e.g., most interviews).',
              'The employment interview is the most common. May be given live, by telephone, or over the Internet.'
            ],
            [
              <strong key="4">Group administered procedures</strong>,
              'Selection procedures given to LARGE GROUPS of applicants at one time (e.g., many paper-and-pencil tests).',
              '—'
            ],
            [
              <strong key="5">Speed tests</strong>,
              'Tests which require the test-taker to work AS QUICKLY AS POSSIBLE and within a SHORT period of time.',
              'The idea is to see how well AND how quickly a person answers. TYPICALLY MOST APPLICANTS DO NOT FINISH — only exceptional applicants do. Example: tests requiring quick checking of clerical data.'
            ],
            [
              <strong key="6">Power tests</strong>,
              'Tests which let respondents go AT THEIR OWN PACE, with no consideration for how quickly an applicant answers.',
              'Typical of traditional PERSONALITY tests.'
            ],
            [
              <strong key="7">Cognitive tests</strong>,
              'Tests measuring an applicant’s GENERAL cognitive ability (general intelligence, or "g") or a SPECIFIC cognitive ability (e.g., mechanical ability).',
              '—'
            ],
            [
              <strong key="8">Non-cognitive tests</strong>,
              'Tests such as personality, which tap individual differences NOT related to cognitive skills.',
              '—'
            ]
          ]}
        />

        <Callout kind="danger" title="Method vs. construct — the distinction Arthur & Villado (2008) insist on">
          <p>
            <strong>The job interview is a SELECTION METHOD.</strong> But depending on what questions are asked,{' '}
            <strong>different interviews measure different psychological CONSTRUCTS</strong>.
          </p>
          <p className="mt-2">
            Figure 6.1&rsquo;s example: <strong>Company A</strong> and <strong>Company B</strong> both hire
            salespeople using an <strong>interview</strong> (same method) — but Company A focuses on{' '}
            <strong>job knowledge</strong> while Company B focuses on{' '}
            <strong>interpersonal skills</strong> (different KSAOs).
          </p>
          <p className="mt-2 font-semibold">
            Implication: validity depends not only on WHAT METHOD is used, but on WHAT THE METHOD IS MEASURING.
          </p>
        </Callout>
      </>
    ),
    images: [
      {
        src: `${IMG}/06a_fig6-1_same_method_different_ksaos.png`,
        alt: 'Figure 6.1: two boxes, Retail Sales Company A and Retail Sales Company B, both with selection procedure "Interview for Job Applicants" marked Same, but with KSAO Measured differing — Job Knowledge versus Interpersonal Skills — marked Different.',
        caption: 'Figure 6.1 — Two retail companies using the same selection METHOD but measuring different KSAOs.'
      }
    ]
  },

  // ------------------------------------------------------------------ 3
  {
    id: 'utility-adverse-impact',
    title: 'Utility, Adverse Impact & Test Batteries',
    subtitle: 'The two factors that decide whether a valid procedure actually gets used',
    content: (
      <>
        <Callout kind="danger" title="Two terms that recur through the whole chapter">
          <Table
            headers={['Term', 'Glossary definition', 'Why it drives decisions']}
            rows={[
              [
                <strong key="u">Utility</strong>,
                'The DOLLAR VALUE of using a selection procedure, largely determined by (1) the procedure’s VALIDITY, (2) the COST of using it, and (3) the BENEFIT it provides in terms of improved worker performance.',
                'A test may be a good predictor, but cost so much to administer that it is not worth it. (More in Ch. 7.)'
              ],
              [
                <strong key="a">Adverse impact</strong>,
                'The degree to which there are MEAN DIFFERENCES in the performance of different subgroups (e.g., ethnic groups, men vs. women) on a selection procedure.',
                'A MAJOR concern to most employers, and one that "largely determines whether or not they are willing to use a given selection procedure" — because it affects WORKFORCE DIVERSITY and the LIKELIHOOD OF SUCCESSFULLY DEFENDING the procedure in litigation (Gatewood et al., 2018).'
              ]
            ]}
          />
        </Callout>

        <Callout kind="tip" title="The combination principle — the chapter's organizing claim">
          <strong>&ldquo;No single selection procedure is perfect at selecting employees for a given job.&rdquo;</strong>{' '}
          Some <strong>combination</strong> is typically used — each predicting some{' '}
          <strong>unique aspect of performance</strong> (Schmidt &amp; Hunter, 1998).
          <p className="mt-2">
            The retail salesperson example: measure <strong>product knowledge with a test</strong>,{' '}
            <strong>honesty with an integrity test</strong>, and{' '}
            <strong>interpersonal skills with an interview</strong>. Each measures an important job-relevant KSAO.
          </p>
        </Callout>

        <p>
          <strong>Battery of selection procedures (test battery)</strong> — glossary:{' '}
          <em>a group of selection procedures that can be used together to predict job performance.</em> How best
          to <em>combine</em> results from different procedures is covered in Chapter 7.
        </p>
      </>
    )
  },

  // ------------------------------------------------------------------ 4
  {
    id: 'cognitive-ability',
    title: 'Tests of General Cognitive Ability (g)',
    subtitle: 'The best predictor — and the adverse impact dilemma',
    images: [
      {
        src: `${IMG}/06b_fig6-2_cognitive_ability_item_verbal.png`,
        alt: 'Figure 6.2 sample verbal analogy item: "Paper is to scissors as wood is to" with options knife, saw (correct, marked with an asterisk), scissors, and screwdriver.',
        caption: 'Figure 6.2 — Sample verbal analogy cognitive ability item. Correct choices are indicated with an asterisk.'
      },
      {
        src: `${IMG}/06c_fig6-2_cognitive_ability_item_math.png`,
        alt: 'Figure 6.2 sample quantitative item: "In the triangle, angles A and C are each 45 degrees. What is the size of angle B?" with options 30 degrees, 45 degrees, 90 degrees (correct), and "There isn’t enough information."',
        caption: 'Figure 6.2 — Sample quantitative cognitive ability item.'
      }
    ],
    content: (
      <>
        <p>
          <strong>Cognitive abilities</strong> relate to a person&rsquo;s ability to{' '}
          <em>&ldquo;perceive, process, evaluate, compare, create, understand, manipulate, or generally think
          about information and ideas&rdquo;</em> (Guion, 1998, p. 124).{' '}
          <strong>General cognitive ability</strong> — glossary: <em>includes reasoning, symbolic
          representation, and problem solving</em> (Sternberg &amp; Detterman, 1986).
        </p>

        <Callout kind="danger" title="The five facts about g that carry the most exam weight">
          <ol className="list-decimal pl-5 space-y-1.5">
            <li>
              <strong>g is one of the BEST predictors of performance across jobs</strong> — validity{' '}
              <strong>.51</strong> (Schmidt &amp; Hunter, 1998). It has been <strong>cited as one of the best
              predictors of job performance</strong> (Ones et al., 2012a).
            </li>
            <li>
              <strong>Why g works:</strong> its relationship with <strong>knowledge acquisition</strong> both in{' '}
              <strong>training</strong> (Hunter, 1986) and <strong>on the job</strong> (Kuncel et al., 2004) —{' '}
              <strong>it allows workers to LEARN THEIR JOB MORE QUICKLY.</strong>
            </li>
            <li>
              <strong>g is a better predictor of CORE TASK performance than of CONTEXTUAL performance</strong>{' '}
              (Ones et al., 2012a) — connect this to Ch. 4.
            </li>
            <li>
              <strong>g is an ESPECIALLY good predictor for COMPLEX jobs</strong> (Schmidt &amp; Hunter, 2004),
              which makes sense given the knowledge-acquisition mechanism. Salgado et al. (2003) replicated this
              in a European meta-analysis: g predicts across a wide range of jobs, and{' '}
              <strong>job complexity MODERATES the g&ndash;performance relationship</strong>.
            </li>
            <li>
              <strong>Cognitive ability tests are reasonably INEXPENSIVE</strong> for organizations to use.
            </li>
          </ol>
          <p className="mt-2 text-sm">
            One more oddity worth knowing: <strong>g also seems to be INCREASING with each successive
            generation</strong> (Flynn, 1999).
          </p>
        </Callout>

        <Card title="Spearman (1904): g vs. specific abilities">
          <p className="text-sm">
            In a classic paper near the start of the twentieth century, Spearman differentiated{' '}
            <strong>g</strong> from specific abilities such as verbal and numerical reasoning. Although separate,{' '}
            <strong>they are correlated</strong>, since <strong>g allows the person to develop these specific
            abilities depending on opportunities and interests</strong> (Ones et al., 2012a).
          </p>
        </Card>

        <Card title="The Wonderlic Personnel Test (WPT) — the chapter's worked example">
          <Table
            headers={['Feature', 'Detail']}
            rows={[
              ['Length / time', '50 items administered in 12 MINUTES'],
              ['Assumption', 'MOST CANDIDATES WILL NOT FINISH the test'],
              ['Item types', 'Verbal and numerical reasoning, spatial relations, and number series'],
              ['What it primarily measures', 'VERBAL COMPREHENSION, followed by deduction and numerical fluency (Guion, 1965)'],
              ['Item ordering', 'Arranged IN ORDER OF DIFFICULTY — easy items at the beginning, difficult items at the end'],
              ['History', 'Developed in the 1930s, so it has EXTENSIVE NORMS for different jobs; available in numerous languages']
            ]}
          />
        </Card>

        <Callout kind="danger" title="The adverse impact dilemma — Gatewood et al.'s (2018) two-line summary">
          <p className="font-semibold">
            First, tests of g are HIGHLY VALID for most jobs. Second, they have ADVERSE IMPACT.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              Group <strong>mean test scores for Blacks and Hispanics tend to be LOWER than the mean for
              Whites</strong>, with <strong>similar mean scores for White and Asian groups</strong> (Roth et al.,
              2001).
            </li>
            <li>
              <strong>There is considerable VARIABILITY WITHIN each ethnic group and considerable OVERLAP between
              groups.</strong> The chapter states this twice.
            </li>
            <li>
              <strong>Differences between ethnic groups on ACTUAL JOB PERFORMANCE are often LESS than the
              differences on tests of g</strong> (Sackett &amp; Wilk, 1994) — the score gaps do not always
              translate into performance gaps.
            </li>
            <li>
              Mean differences <strong>may reflect the fact that many of these tests focus a good bit on ACQUIRED
              SKILL</strong> such as math and vocabulary (Schmidt, 2002).
            </li>
            <li>
              Consequences of overreliance: <strong>less diversity, fewer opportunities for some groups, and
              potential litigation if the test has not been validated</strong>.
            </li>
          </ul>
        </Callout>

        <Callout kind="tip" title="The two recommended responses">
          <ol className="list-decimal pl-5 space-y-1">
            <li>
              <strong>Do not use g as the sole predictor.</strong> &ldquo;Cognitive ability presents only one part
              of the picture of how good a potential employee may be.&rdquo;
            </li>
            <li>
              <strong>Combine g with other predictors LOW in adverse impact</strong> — such as{' '}
              <strong>personality tests</strong> (Chernyshenko et al., 2011; Lievens et al., 2005).
            </li>
          </ol>
          <p className="mt-2">
            The chapter notes the disagreement honestly: some I-O psychologists argue organizations{' '}
            <strong>&ldquo;should not be so quick to dismiss an inexpensive selection tool that is also
            valid.&rdquo;</strong> Still, the adverse impact issue has led many organizations to{' '}
            <strong>avoid cognitive ability tests altogether</strong>.
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 5
  {
    id: 'specific-abilities',
    title: 'Specific Cognitive Ability & Psychomotor Tests',
    subtitle: 'Mechanical, clerical, and dexterity assessments',
    images: [
      {
        src: `${IMG}/06d_fig6-3_mechanical_ability_item.png`,
        alt: 'Figure 6.3: a sample mechanical ability item showing a mechanical diagram with lettered options; the correct choice is marked with an asterisk.',
        caption: 'Figure 6.3 — Sample mechanical ability item (Bennett Mechanical Comprehension style).'
      },
      {
        src: `${IMG}/06e_fig6-4_clerical_ability_item.png`,
        alt: 'Figure 6.4: a sample clerical ability item instructing the test-taker to put a check between letter/number strings that are the same, with pairs such as 325B78 / 325878 and 87t559 / 87t559.',
        caption: 'Figure 6.4 — Sample item from a clerical ability test. Most clerical tests are SPEED tests.'
      }
    ],
    content: (
      <>
        <p>
          <strong>Specific cognitive ability tests</strong> — glossary: <em>tests that do not assess g but
          instead assess specific dimensions such as mechanical ability and/or clerical speed and accuracy.</em>
        </p>

        <Callout kind="warn" title="They are not entirely separate from g">
          Measures of specific abilities <strong>generally ARE correlated with measures of g</strong>, presumably
          because <strong>a person&rsquo;s general cognitive ability allows them the capacity to develop these
          specific abilities</strong> (Ones et al., 2012a). The chapter separates them{' '}
          <em>&ldquo;for simplicity&rsquo;s sake.&rdquo;</em>
        </Callout>

        <Table
          headers={['Test type', 'Classic example & item format', 'Typical jobs']}
          rows={[
            [
              <strong key="m">Mechanical ability</strong>,
              'The BENNETT MECHANICAL COMPREHENSION TEST — "perhaps one of the best-known tests of mechanical ability," around for decades. Items provide pictures of mechanical equipment such as GEARS, PULLEYS, and AIRPLANES, and ask which way the pulley or gear would turn under various circumstances.',
              'Skilled trades, mechanics, equipment operators'
            ],
            [
              <strong key="c">Clerical ability</strong>,
              'Test-takers MARK ITEMS THAT ARE DIFFERENT from each other, quickly reporting whether items are alike or different. MOST CLERICAL ABILITY TESTS ARE SPEED TESTS: timed, with the score determined by HOW MANY ITEMS the respondent completes AND HOW MANY THEY GET WRONG.',
              'Office or clerical workers'
            ],
            [
              <strong key="p">Psychomotor tests</strong>,
              'Glossary: tests which assess DEXTERITY AND/OR COORDINATION and which may require agility and dexterous movements of the FINGERS, HANDS, OR BODY (Guion, 1998). May require inserting pegs into boards or correctly using simple tools.',
              'Varies widely by job'
            ]
          ]}
        />

        <Callout kind="danger" title="The job analysis requirement for psychomotor tests">
          Given the <strong>range of possible abilities</strong> these tests assess, it is important that{' '}
          <strong>the particular psychomotor skills assessed MATCH THE JOB</strong>. In other words, it is
          important to <strong>do a job analysis BEFORE deciding whether to use a psychomotor test and which type
          of psychomotor skills are needed</strong> (Guion, 1998).
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 6
  {
    id: 'personality-big-five',
    title: 'Personality Tests & the Big Five',
    subtitle: 'From Guion & Gottier’s dismissal to Barrick & Mount’s rehabilitation',
    images: [
      {
        src: `${IMG}/06f_fig6-5_big_five_dimensions.png`,
        alt: 'Figure 6.5: a five-row table of the Big Five personality dimensions with an image and description for each — Openness to Experience, Conscientiousness, Extraversion, Agreeableness, and Neuroticism.',
        caption: 'Figure 6.5 — The "Big Five" personality dimensions and their work relevance.'
      },
      {
        src: `${IMG}/06g_table6-1_big_five_ipip_items.png`,
        alt: 'Table 6.1: sample Big Five items from the IPIP with a 1-to-5 response scale from Very Inaccurate to Very Accurate, listing five items each for Extraversion, Agreeableness, Conscientiousness, Neuroticism, and Openness to Experience.',
        caption: 'Table 6.1 — Sample Big Five items from the International Personality Item Pool (Goldberg, 1999).'
      },
      {
        src: `${IMG}/06h_fig6-6_conscientiousness_facets.png`,
        alt: 'Figure 6.6: a diagram of the facets of conscientiousness — Orderliness, Dutifulness, Achievement-Striving, Self-Discipline, Cautiousness, and Self-Efficacy.',
        caption: 'Figure 6.6 — The facets of conscientiousness (Costa & McCrae, 2008).'
      }
    ],
    content: (
      <>
        <Callout kind="warn" title="Personality is a CONSTRUCT, not a method">
          <strong>&ldquo;Personality itself is best viewed as a construct or system of individual differences,
          not as a specific selection method or test.&rdquo;</strong> There are many personality tests available,
          such as the <strong>NEO</strong> (McCrae &amp; Costa, 1987) and the{' '}
          <strong>International Personality Item Pool (IPIP)</strong> (Goldberg, 1999).
        </Callout>

        <Card title="The historical arc — a very likely exam narrative">
          <ol className="list-decimal pl-5 space-y-1.5 text-sm">
            <li>
              Personality tests were used for selection <strong>as far back as World War I</strong> among army
              recruits (Barrick &amp; Mount, 2012).
            </li>
            <li>
              But dominant tests <strong>since the 1940s</strong>, such as the{' '}
              <strong>Minnesota Multiphasic Personality Inventory (MMPI)</strong>, focused on{' '}
              <strong>CLINICAL DIAGNOSIS</strong> — including dimensions like &ldquo;schizophrenia&rdquo; or
              &ldquo;paranoia&rdquo; — because they were developed on <strong>psychiatric populations, not the
              normal adult population</strong>.
            </li>
            <li>
              Built for a different purpose, they were <strong>generally found to be weak predictors of job
              performance</strong>. <strong>Guion and Gottier (1965)</strong>:{' '}
              <em>&ldquo;it is difficult&hellip;to advocate, with a clear conscience, the use of personality
              measures in most situations as a basis for making employment decisions about people.&rdquo;</em>
            </li>
            <li>
              <strong>1991: Barrick and Mount</strong> published their groundbreaking meta-analysis on the{' '}
              <strong>Five-Factor Model (FFM) / &ldquo;Big Five&rdquo;</strong> and job performance — focusing on{' '}
              <strong>NORMAL adult personality</strong>.
            </li>
          </ol>
          <Callout kind="info" title="A legal footnote">
            Tests developed for clinical diagnosis are <strong>generally illegal for most selection decisions
            today</strong>, but are considered <strong>acceptable for some HIGH-RISK jobs such as police officers
            or juvenile probation officers</strong>.
          </Callout>
        </Card>

        <Callout kind="danger" title="OCEAN — the Big Five and what each predicts">
          <Table
            headers={['Dimension', 'Content', 'What it predicts (Figure 6.5 & Barrick and Mount, 1991)']}
            rows={[
              [
                <strong key="o">Openness to Experience</strong>,
                'Being interested in learning; cultured',
                'A PREDICTOR OF SUCCESS IN TRAINING'
              ],
              [
                <strong key="c">Conscientiousness</strong>,
                'Achievement-orientation, detail-orientation, dependability',
                'THE MOST CONSISTENT of the Big Five in predicting performance ACROSS ALL JOBS — "the best predictor of performance across all jobs"'
              ],
              [
                <strong key="e">Extraversion</strong>,
                'Sociable, assertive, friendly',
                'A GOOD PREDICTOR FOR SALES AND MANAGEMENT JOBS; also relates to training performance'
              ],
              [
                <strong key="a">Agreeableness</strong>,
                'Compliant, kind, sympathetic to others',
                '(No specific job-performance claim made in Figure 6.5)'
              ],
              [
                <strong key="n">Neuroticism</strong>,
                'Anxious, easily upset. Put positively: EMOTIONAL STABILITY',
                'MAY ONLY AFFECT JOB PERFORMANCE IF AT HIGH LEVELS'
              ]
            ]}
          />
          <p className="mt-2 text-sm">
            The textbook supplies the mnemonic itself: <strong>&ldquo;To help remember the names of the Big Five,
            think of OCEAN.&rdquo;</strong>
          </p>
        </Callout>

        <Callout kind="danger" title="Why the FFM caught on so fast — TWO reasons, one far more important">
          <ol className="list-decimal pl-5 space-y-1">
            <li>
              Although the <strong>validities of the Big Five are fairly modest</strong> (Morgeson et al., 2007),
              these tests are <strong>relatively inexpensive</strong>.
            </li>
            <li>
              <strong>&ldquo;More important to many employers&rdquo;</strong>: personality tests generally show{' '}
              <strong>LOW ADVERSE IMPACT against protected groups</strong> (Foldes et al., 2008),{' '}
              <strong>especially compared with tests of general cognitive ability</strong>.{' '}
              <em>&ldquo;That factor alone has made personality tests very attractive to many employers.&rdquo;</em>
            </li>
          </ol>
        </Callout>

        <Card title="Why does personality predict performance? — three mechanisms">
          <ul className="list-disc pl-5 space-y-1.5 text-sm">
            <li>
              Personality relates to most aspects of performance, <strong>but particularly to OCBs</strong> (e.g.,
              helping coworkers) <strong>and CWBs</strong> (e.g., arguing with others) — see Ch. 4 (Ones et al.,
              2007).
            </li>
            <li>
              <strong>Conscientiousness relates to WORK MOTIVATION, which in turn relates to job
              performance</strong> (Barrick et al., 2002).
            </li>
            <li>
              Although much research is North American, <strong>European research shows a SIMILAR pattern of
              relationships</strong> with job performance — <em>&ldquo;an important plus for global
              organizations&rdquo;</em> (Salgado, 1997).
            </li>
          </ul>
        </Card>
      </>
    )
  }
];
