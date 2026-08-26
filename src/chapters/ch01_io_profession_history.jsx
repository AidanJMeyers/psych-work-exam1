import React from 'react';
import { Callout, Table, Card, Pill } from '../components/Visual.jsx';

const IMG = 'ch01_io_profession_history';

export default {
  id: 1,
  title: 'I-O Psychology: The Profession & Its History',
  subtitle:
    'What I-O psychology is, who does it, where they work and how they are trained — plus the full historical arc from Wundt’s lab to the high-tech HR era.',

  blocks: [
    // ------------------------------------------------------------------ 1
    {
      id: 'what-is-io',
      title: 'What I-O Psychology Is',
      subtitle: 'Definition, the two halves of the field, and its interdisciplinary roots',
      images: [
        {
          src: `${IMG}/01a_fig1-1_interdisciplinary_influences.png`,
          alt: 'Figure 1.1 from the textbook: five colored boxes showing basic psychology (personality, decision-making, motivation), social psychology (group processes, leadership), cognitive psychology (performance appraisal, learning), health psychology (stress), and psychometrics and individual differences (personnel selection and placement).',
          caption: 'Figure 1.1 — I-O psychology is a truly interdisciplinary field, drawing heavily on other branches of psychology.'
        }
      ],
      content: (
        <>
          <p>
            <strong>Industrial and organizational (I-O) psychology</strong> — also called{' '}
            <em>&ldquo;the psychology of work&rdquo;</em> — is defined by your textbook as{' '}
            <strong>
              a specialization in psychology focused on the application of psychological principles to
              understanding people in the workplace
            </strong>
            . Memorize that phrasing; definitional MCQs on exam 1 tend to quote the marginal glossary
            almost verbatim.
          </p>
          <p>
            The rationale the authors open with is worth remembering because it frames the whole book:
            once a person begins their career, the workplace is where they spend the greatest part of
            their waking hours until retirement. That makes understanding behavior at work not a niche
            academic curiosity but a question about the majority of adult life.
          </p>

          <Callout kind="info" title="The two historical halves — and why the split no longer exists">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Industrial psychology</strong> (traditionally, in North America) focuses on{' '}
                <em>human resource procedures guided by psychological principles</em>: job analysis,
                personnel selection, performance appraisal, and training.
              </li>
              <li>
                <strong>Organizational psychology</strong> focuses on the &ldquo;human side&rdquo; of the
                worker: work motivation, leadership, teams, job satisfaction, and work&ndash;life
                balance. It resembles <em>Organizational Behavior</em> in business schools, but with a
                more decidedly psychological focus.
              </li>
              <li>
                The two <strong>merged many decades ago</strong>. The textbook is explicit that the
                dichotomy is &ldquo;neither accurate nor useful&rdquo; and that any separation is
                &ldquo;a bit artificial,&rdquo; because concepts from each inform the other.
              </li>
            </ul>
          </Callout>

          <p>
            The book&rsquo;s own worked example of that integration: to hire the best salesperson you
            would use <em>industrial</em> research on how to run a structured interview (Ch. 6), but you
            would also use <em>organizational</em> research on motivation to predict what will make that
            salesperson accept the offer and perform well.
          </p>

          <Table
            headers={['Contributing subfield', 'What it contributes to I-O']}
            rows={[
              ['Basic psychology', 'Personality, decision-making, motivation'],
              ['Social psychology', 'Group processes, leadership, communication'],
              ['Cognitive psychology', 'Performance appraisal, learning, training'],
              ['Health psychology', 'Stress and its impact on the worker'],
              ['Psychometrics / individual differences', 'Personnel selection and placement']
            ]}
          />

          <Callout kind="tip" title="The dual-benefit principle — a favorite MCQ stem">
            I-O psychology aims to benefit <strong>both the organization and the worker</strong>. On the
            organizational side: placing the right worker in the right position, which raises
            productivity and retention. On the worker side: more positive job attitudes and better health
            outcomes. If an answer choice says I-O serves <em>only</em> management or <em>only</em>{' '}
            employees, it is wrong.
          </Callout>

          <p className="text-sm text-slate-600">
            Organizations named in the chapter as applying I-O principles: the FBI, NASA, Google, Amazon,
            Nestl&eacute;, and Starbucks, plus public sector, military, not-for-profit and smaller
            organizations worldwide.
          </p>
        </>
      )
    },

    // ------------------------------------------------------------------ 2
    {
      id: 'professional-orgs',
      title: 'Professional Organizations: SIOP and Friends',
      subtitle: 'SIOP, APA/APS, the local societies, and the Academy of Management',
      images: [
        {
          src: `${IMG}/01b_fig1-2_siop_membership.png`,
          alt: 'Figure 1.2: pie chart of SIOP membership — Member 44 percent, Student Affiliate 31 percent, Associate 19 percent, Fellow 6 percent.',
          caption: 'Figure 1.2 — SIOP membership breakdown (Nader, personal communication, September 17, 2020).'
        },
        {
          src: `${IMG}/01c_table1-1_local_io_organizations.png`,
          alt: 'Table 1.1: a list of local I-O organizations across the US, including AAIOP Austin, BAAP Bay Area, CIOP Chicago, METRO New York, MPPAW Minnesota, and PTC/SC Southern California.',
          caption: 'Table 1.1 — Some local I-O organizations across the US (non-exhaustive).'
        }
      ],
      content: (
        <>
          <p>
            The <strong>Society for Industrial and Organizational Psychology (SIOP)</strong> is the primary
            professional organization to which most I-O psychologists in the <strong>US and Canada</strong>{' '}
            belong. Four facts carry most of the exam weight here:
          </p>

          <Table
            headers={['Fact', 'Detail']}
            rows={[
              ['Founded', '1945'],
              ['Formal status', 'Division 14 of the American Psychological Association (APA)'],
              ['Membership (as of 2020)', 'Over 10,000 people, including student affiliates'],
              ['Annual conference draw', 'Upwards of 4,000 people per year']
            ]}
          />

          <p>
            Although SIOP is APA Division 14, many SIOP members also choose membership in the{' '}
            <strong>Association for Psychological Science (APS)</strong>. Students can join SIOP for a
            nominal fee.
          </p>

          <Callout kind="info" title="SIOP's two publications — don't mix them up">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong><em>The Industrial-Organizational Psychologist</em> (TIP)</strong> — keeps members
                up to date on <em>current professional issues</em> (e.g., employment laws).
              </li>
              <li>
                <strong>
                  <em>Industrial and Organizational Psychology: Perspectives on Science and Practice</em>
                </strong>{' '}
                — a journal of <em>current research and practice topics and controversies</em>.
              </li>
            </ul>
          </Callout>

          <p>
            SIOP&rsquo;s functions, as listed by the textbook: <strong>publications</strong>, its{' '}
            <strong>annual conference</strong>, and <strong>promotion and advocacy</strong> for the
            profession. Advocacy includes resources for undergraduates and graduate students, and{' '}
            <strong>white papers</strong> that give policy-makers and managers up-to-date science on
            everything from hiring to employee stress. (All three authors of your textbook have written
            SIOP white papers.) SIOP also advocates to lawmakers and the public to raise the visibility of
            the science.
          </p>

          <p>
            Beyond SIOP there are numerous <strong>local, city- or region-level</strong> I-O organizations
            (Table 1.1) that hold local meetings and presentations. Separately, many I-O psychologists —{' '}
            <strong>particularly academics</strong> — belong to the <strong>Academy of Management (AoM)</strong>.
            AoM divisions relevant to I-O include <em>Organizational Behavior</em>, <em>Human Resources</em>,{' '}
            <em>Gender and Diversity</em>, and <em>Research Methods</em>; its key journals are the{' '}
            <em>Academy of Management Journal</em> and <em>Academy of Management Review</em>.
          </p>
        </>
      )
    },

    // ------------------------------------------------------------------ 3
    {
      id: 'io-around-world',
      title: 'I-O Around the World',
      subtitle: 'EAWOP, IAAP Division 1, the Alliance for Organizational Psychology, and EuroPsy',
      images: [
        {
          src: `${IMG}/01d_table1-2_global_io_organizations.png`,
          alt: 'Table 1.2: examples of professional I-O organizations around the world including SIOPA Australia, British Psychological Society Division of Occupational Psychology, Canadian Society for I-O Psychology, Chinese Psychological Society Division of Industrial Psychology, EAWOP, the Global Organization for Humanitarian Work Psychology, IAAP Division 1, Psychological Society of Ireland, and SIOPSA South Africa.',
          caption: 'Table 1.2 — Examples of I-O professional organizations around the world (non-exhaustive).'
        }
      ],
      content: (
        <>
          <Callout kind="warn" title="Terminology trap">
            In many parts of the world — <strong>notably Europe</strong> — the field is called{' '}
            <strong>work and organizational psychology</strong>, not &ldquo;I-O psychology.&rdquo; That is a
            glossary term in your book and a very easy MCQ.
          </Callout>

          <Table
            headers={['Organization', 'What you need to know']}
            rows={[
              [
                <strong key="e">EAWOP</strong>,
                'European Association of Work and Organizational Psychology. One of the largest I-O organizations. Made up of 30 constituent organizations from different European countries; over 2,000 members. Publishes three journals: European Journal of Work and Organizational Psychology, Organizational Psychology Review, and In Practice. Conference every two years in a different European country; also runs Small Group Meetings on specific research topics (past topics: personnel selection, employment for workers with disabilities, the aging workforce).'
              ],
              [
                <strong key="i">IAAP Div. 1</strong>,
                'Division 1 (Work and Organizational Psychology) of the International Association for Applied Psychology. Publishes Applied Psychology: An International Review. IAAP is one of the oldest professional associations for psychologists, dating to 1920. Its ICAP conference is held every four years (past sites: Singapore, Greece, Australia, France).'
              ],
              [
                <strong key="a">AOP</strong>,
                'Alliance for Organizational Psychology — recently formed by SIOP + EAWOP + IAAP as a worldwide alliance to increase communication among I-O organizations and raise the global visibility of I-O psychology.'
              ],
              [
                <strong key="p">EuroPsy</strong>,
                'The European Certificate in Psychology. Established to assure comparability of training across European countries so psychologists can practice work psychology in different countries; provides a subspecialty in work and organizational psychology.'
              ]
            ]}
          />

          <Callout kind="tip" title="Number mnemonic">
            <strong>SIOP = 1945, 10,000+ members.</strong> <strong>EAWOP = 30 orgs, 2,000+ members, 3
            journals, every 2 years.</strong> <strong>IAAP = founded 1920, ICAP every 4 years.</strong>
          </Callout>
        </>
      )
    },

    // ------------------------------------------------------------------ 4
    {
      id: 'training',
      title: 'Training in I-O Psychology',
      subtitle: 'Degrees, SIOP’s 24 training areas, grad-school admissions, and the US/Europe contrast',
      images: [
        {
          src: `${IMG}/01e_table1-3_siop_training_areas.png`,
          alt: 'Table 1.3: SIOP’s 24 key areas of training in I-O psychology, from ethical/legal/diversity/international issues and research methods through criterion theory, groups and teams, leadership, occupational health and safety, performance appraisal, personnel selection, training, and work motivation.',
          caption: 'Table 1.3 — SIOP’s 24 recommended areas of graduate training (SIOP, 2016).'
        }
      ],
      content: (
        <>
          <p>
            To be considered a <strong>psychologist</strong> in the US, one must generally obtain{' '}
            <strong>doctoral training</strong> (Ph.D. or Psy.D.) in I-O psychology or a related field.
            SIOP&rsquo;s recommendations cover <strong>24 areas</strong> (Table 1.3), spanning everything
            from selection, training, and job analysis to motivation, leadership, and teams.
          </p>

          <Table
            headers={['Question', 'Answer from the chapter']}
            rows={[
              ['How long is US/Canadian doctoral training?', 'At least four years beyond the bachelor’s degree'],
              ['What does it include?', 'Coursework, research, a master’s thesis and dissertation, and a challenging set of comprehensive exams'],
              ['What can a BA in psychology get you?', 'Work in fields such as Human Resources Management — but at least a master’s in I-O is necessary for I-O psychology jobs'],
              ['O*NET outlook', '"Bright outlook" — the profession is expected to grow rapidly'],
              ['Ph.D. vs master’s pay (US/Canada)', 'In organizational settings and consulting firms, pay may be higher for doctoral-level I-O psychologists']
            ]}
          />

          <Callout kind="warn" title="The US/Canada vs. Europe contrast — a classic comparison MCQ">
            In <strong>Europe</strong>, most people who plan to work in organizational settings acquire{' '}
            <strong>master&rsquo;s degrees</strong>, with the <strong>Ph.D. being purely a research
            degree</strong> usually pursued only by people who want university jobs. In the{' '}
            <strong>US and Canada</strong>, good opportunities exist at both levels, but the doctorate is
            the standard credential for calling oneself a psychologist.
          </Callout>

          <Card title="The five admissions criteria the textbook lists (in order)">
            <ol className="list-decimal pl-5 space-y-1.5 text-sm">
              <li>
                <strong>Grade point average</strong> — don&rsquo;t let it slide, <em>including statistics
                and research methods classes</em>.
              </li>
              <li>
                <strong>GRE scores</strong> — most programs require high scores; never wait until the last
                minute, since they are weighted heavily.
              </li>
              <li>
                <strong>Research experience as an undergraduate</strong> — essential for most programs,
                especially for the Ph.D., because it gives a &ldquo;preview&rdquo; of the graduate student
                job.
              </li>
              <li>
                <strong>Strong letters of reference</strong> — especially from professors who can speak to
                specific academic and research skills.
              </li>
              <li>
                <strong>Program fit + apply broadly</strong> — admissions are competitive, so apply to more
                than one school.
              </li>
            </ol>
          </Card>

          <p className="text-sm text-slate-600">
            A list of graduate I-O programs is maintained on the SIOP website.
          </p>
        </>
      )
    },

    // ------------------------------------------------------------------ 5
    {
      id: 'scientist-practitioner',
      title: 'The Scientist-Practitioner Model',
      subtitle: 'The central tenet that links research and application',
      content: (
        <>
          <p>
            The <strong>scientist-practitioner model</strong> is defined in the glossary as{' '}
            <strong>
              a central tenet of I-O psychology stating that a strong I-O psychologist will be both a
              scientist/researcher and a strong practitioner
            </strong>
            . It comes directly from SIOP&rsquo;s (2016) training guidelines.
          </p>

          <Callout kind="info" title="The two directions the model runs">
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Science &rarr; Practice.</strong> Researchers (e.g., university professors developing
                and testing theory) must consider the <em>applicability of their research to field
                settings</em> — where it will actually be used.
              </li>
              <li>
                <strong>Practice &rarr; Science.</strong> Practitioners applying I-O principles inside real
                organizations must <em>keep up with current research</em> so that what they recommend rests
                on robust, validated theory rather than intuition.
              </li>
            </ul>
          </Callout>

          <p>
            The model challenges I-O psychologists on both fronts at once: to demand rigorously tested
            theory <em>and</em> to demand that recommendations to organizations be grounded in strong
            research findings. Each individual I-O psychologist emphasizes science and practice to varying
            degrees — <strong>the goal is to blend the two whenever possible</strong>, not to require a
            50/50 split.
          </p>

          <Callout kind="tip" title="Why it matters">
            This is the ideological glue of the whole course. Nearly every later chapter (validity in
            selection, criterion measurement, training evaluation) is an instance of the same claim:
            organizational practice should be evidence-based, and evidence should be gathered with an eye
            to whether it will actually work in the field.
          </Callout>
        </>
      )
    },

    // ------------------------------------------------------------------ 6
    {
      id: 'where-they-work',
      title: 'Where I-O Psychologists Work',
      subtitle: 'Five settings, the business-school migration, and the employment-sector percentages',
      images: [
        {
          src: `${IMG}/01f_fig1-3_areas_of_practice.png`,
          alt: 'Figure 1.3: five colored boxes labeled Academic, Private Industry, Government, Military, and Consulting.',
          caption: 'Figure 1.3 — Areas of practice for I-O psychologists.'
        },
        {
          src: `${IMG}/01g_fig1-4_employment_sectors.png`,
          alt: 'Figure 1.4: pie chart of SIOP employment sectors — Academic 39 percent, Private Industry 25 percent, Government 8 percent, Consultant 27 percent, Other 1 percent.',
          caption: 'Figure 1.4 — Employment sectors for SIOP membership by percentage (Nader, September 17, 2020).'
        }
      ],
      content: (
        <>
          <Callout kind="danger" title="Memorize these percentages — they are the single most MCQ-able numbers in Ch. 1">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-1 text-center">
              {[
                ['Academic', '39%'],
                ['Consultant', '27%'],
                ['Private Industry', '25%'],
                ['Government', '8%'],
                ['Other', '1%']
              ].map(([k, v]) => (
                <div key={k} className="bg-white border border-red-200 rounded p-2">
                  <div className="text-xl font-bold text-red-700">{v}</div>
                  <div className="text-[11px] text-slate-600">{k}</div>
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs">
              Note the ordering trap: <strong>consulting (27%) outranks private industry (25%)</strong>.
            </p>
          </Callout>

          <Table
            headers={['Setting', 'What the work looks like']}
            rows={[
              [
                <strong key="a">Academic</strong>,
                'Conducting research, training graduate students, teaching undergraduate and graduate classes, and internal/external service work. Increasingly located in business schools rather than psychology departments.'
              ],
              [
                <strong key="p">Private industry</strong>,
                'Usually in corporate headquarters, often as part of the HR function: employee surveys and analysis, building selection systems, designing training programs, developing interventions to reduce employee stress.'
              ],
              [
                <strong key="g">Government</strong>,
                'Especially at the US federal level, supporting human resource functions.'
              ],
              [
                <strong key="m">Military</strong>,
                'Historically employs I-O psychologists to select the best people, match them to appropriate positions, and train them most effectively.'
              ],
              [
                <strong key="c">Consulting</strong>,
                'Large growth area. Firms range from dozens of I-O psychologists down to a few individuals. They serve organizations that cannot afford a full-time I-O psychologist, or surge into a large corporation when a big project needs a lot of I-O talent at once.'
              ]
            ]}
          />

          <Callout kind="warn" title="The business-school identity debate">
            <strong>Over half of I-O psychology professors now work in Schools of Business</strong>,
            usually in Departments of Management (Nader, personal communication, June 3, 2014). The
            textbook flags this as an ongoing controversy about the direction of the field, the training of
            future I-O psychologists, and their identity — i.e., whether they are more psychology scholars
            or business scholars (Aguinis et al., 2014).
          </Callout>

          <p>
            <strong>Subspecialties.</strong> Table 1.3&rsquo;s 24 training areas double as a map of
            subspecialties. Most I-O psychologists have <em>some</em> training in all of them but
            concentrate research and practice in only a few. The authors give themselves as examples: one
            focuses on personnel selection, employee safety and the aging workforce; another on leadership
            and new employee socialization; another on leadership, performance appraisals and new employee
            overqualification. The stated ideal is <em>not</em> to work only within one&rsquo;s narrow
            interests but to bring broad knowledge to bear — e.g., a training specialist using motivation
            research to design a program that motivates learners.
          </p>
        </>
      )
    },

    // ------------------------------------------------------------------ 7
    {
      id: 'communicating-research',
      title: 'Communicating Research: Journals & Conferences',
      subtitle: 'Peer-reviewed vs. practice-oriented vs. trade — the three-tier distinction',
      images: [
        {
          src: `${IMG}/01h_table1-4_io_journals.png`,
          alt: 'Table 1.4: examples of highly respected academic journals related to I-O psychology, including Journal of Applied Psychology, Personnel Psychology, Academy of Management Journal and Review, Journal of Occupational Health Psychology, Leadership Quarterly, Organizational Research Methods, and Work, Aging and Retirement.',
          caption: 'Table 1.4 — Examples of highly respected academic journals related to I-O psychology.'
        }
      ],
      content: (
        <>
          <Callout kind="danger" title="This three-tier distinction is prime MCQ material">
            <Table
              headers={['Tier', 'Peer-reviewed?', 'Examples', 'Character']}
              rows={[
                [
                  <strong key="1">Academic / scientific journals</strong>,
                  'Yes — rigorous',
                  'Journal of Applied Psychology, Personnel Psychology, Academy of Management Journal',
                  'Empirical research articles or reviews summarizing research. Reviewed by other I-O experts for rigor and contribution.'
                ],
                [
                  <strong key="2">Practice-oriented journals</strong>,
                  'Not the same rigor',
                  'Academy of Management Perspectives, Harvard Business Review, Sloan Management Review',
                  'Translate scientific findings for I-O and non-I-O practitioners. Based on scientific findings but with less technical detail.'
                ],
                [
                  <strong key="3">Trade journals</strong>,
                  <strong key="n">No</strong>,
                  'HR Magazine, People Management, HR Focus, T+D',
                  'Showcase company activities, industry trends, new products/techniques. Not necessarily committed to communicating scientifically validated findings.'
                ]
              ]}
            />
          </Callout>

          <p>
            <strong>Conferences.</strong> Papers presented at conferences <em>are</em> peer-reviewed, but{' '}
            <strong>not with the same rigor</strong> as journal peer review — which is precisely why
            conferences let I-O psychologists learn the <em>most current</em> research on a topic before it
            appears in print.
          </p>

          <Table
            headers={['Conference', 'Frequency']}
            rows={[
              ['SIOP annual conference', 'Annual'],
              ['Academy of Management conference', 'Annual'],
              ['EAWOP Congress', 'Biennial (every two years)'],
              ['ICAP Congress (IAAP)', 'Every four years']
            ]}
          />
        </>
      )
    },

    // ------------------------------------------------------------------ 8
    {
      id: 'why-history',
      title: 'Why Study the History of I-O?',
      subtitle: 'The three reasons the authors give — and the leadership-research example',
      content: (
        <>
          <p>
            The chapter pauses to justify the history section, and the three reasons are listable enough
            to be an exam item:
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Understanding the roots explains the profession&rsquo;s nature, goals and focus.</strong>{' '}
              Example: early industrial psychologists focused on <em>individual differences</em>, and
              industrial psychology today still has a strong focus on using individual differences to make
              hiring decisions.
            </li>
            <li>
              <strong>Seeing where the field has been helps explain where it is headed.</strong> Example:
              twentieth-century personnel selection work was largely US-based and Western-focused; leaders
              in the field note this is changing as work globalizes (Ryan &amp; Ployhart, 2014).
            </li>
            <li>
              <strong>Knowing what has been studied shows where to go next.</strong> If an issue has already
              been settled there may be no reason to revisit it — or understanding the past may let you
              approach the problem from a different angle.
            </li>
          </ol>

          <Callout kind="tip" title="The leadership example the chapter uses">
            Leadership research has cycled: it began with a <strong>trait approach</strong> (which traits —
            e.g., height, gender — make a great leader), that approach <strong>fell out of favor long
            ago</strong>, and it is <strong>now being revived with a new twist</strong> — which personality
            traits lead to success <em>in certain situations</em>.
          </Callout>

          <p className="text-sm text-slate-600">
            The authors also caution that dating historical eras is genuinely difficult, and that it is hard
            to trace developments in the US versus elsewhere. Much early I-O history is thought of as
            &ldquo;quintessentially American,&rdquo; but similar research was happening around the world
            (Salgado, 2001), and some of the earliest I-O researchers were trained in Europe before moving
            to the US.
          </p>
        </>
      )
    },

    // ------------------------------------------------------------------ 9
    {
      id: 'early-years',
      title: 'Early Years & World War I: Munsterberg, Cattell, Scott',
      subtitle: 'Wundt’s lab, the first textbook, the Psychological Corporation, and Army Alpha/Beta',
      images: [
        {
          src: `${IMG}/01i_hugo_munsterberg.png`,
          alt: 'Historical portrait photograph of Hugo Munsterberg with his signature.',
          caption: 'Hugo Munsterberg — trained under Wundt, came to Harvard, wrote the first I-O psychology textbook.'
        },
        {
          src: `${IMG}/01j_james_mckeen_cattell.png`,
          alt: 'Historical portrait photograph of James McKeen Cattell.',
          caption: 'James McKeen Cattell — Columbia University; founded the Psychological Corporation in 1921.'
        }
      ],
      content: (
        <>
          <p>
            Some authors trace the beginning of I-O psychology to psychologists trained in{' '}
            <strong>Wilhelm Wundt&rsquo;s lab in Germany</strong>. The textbook&rsquo;s analogy: just as a
            nineteenth-century artist went to France to learn Impressionism, a researcher interested in
            psychology went to Germany to learn the newest research techniques (Landy, 1997).
          </p>

          <Table
            headers={['Figure', 'Nationality / home institution', 'Key contributions']}
            rows={[
              [
                <strong key="m">Hugo Munsterberg</strong>,
                'German; came to Harvard University',
                'Tied individual differences in people to work performance. Wrote the FIRST I-O psychology textbook — in German in 1912, published in English in 1913.'
              ],
              [
                <strong key="c">James McKeen Cattell</strong>,
                'American; Columbia University for most of his career',
                'One of the first to recognize the role individual differences play in behavior — that behavior is not solely a function of the environment. Founded the Psychological Corporation in 1921, a major US test publisher for generations.'
              ],
              [
                <strong key="s">Walter Dill Scott</strong>,
                'American; trained in Wundt’s lab; Northwestern University',
                'Fame came from a series of essays on applying psychology to industrial settings — focused on application rather than theory/research. With Bingham, developed the Army Alpha and Army Beta exams (1917).'
              ]
            ]}
          />

          <Callout kind="warn" title="Dates you will be asked for">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>1912</strong> — Munsterberg&rsquo;s industrial psychology text published in German.</li>
              <li><strong>1913</strong> — that same text published in English.</li>
              <li>
                <strong>1917</strong> — <strong>Army Alpha and Army Beta</strong> exams (Scott &amp; Bingham)
                <em> and</em> the <strong>Journal of Applied Psychology</strong> established by APA.
              </li>
              <li><strong>1921</strong> — Cattell founds the Psychological Corporation.</li>
            </ul>
          </Callout>

          <p>
            The common thread: both Munsterberg and Cattell were focused on the{' '}
            <strong>application of psychology in the workplace</strong>, particularly the role that{' '}
            <strong>individual differences</strong> play in human behavior. World War I is where that
            interest met a mass-testing problem — the Army needed to sort enormous numbers of recruits
            quickly, which is what Alpha (for literate recruits) and Beta (a non-verbal form) were built to
            do.
          </p>
        </>
      )
    },

    // ------------------------------------------------------------------ 10
    {
      id: 'scientific-management',
      title: 'Scientific Management (1905–1920): Taylor & the Gilbreths',
      subtitle: 'The "one best way," the "best man," and time-and-motion studies',
      images: [
        {
          src: `${IMG}/01k_frederick_taylor.png`,
          alt: 'Historical photograph of Frederick Taylor.',
          caption: 'Frederick Taylor — widely considered the "father" of Scientific Management.'
        },
        {
          src: `${IMG}/01l_lillian_gilbreth.png`,
          alt: 'Historical portrait of Lillian Gilbreth with caption noting she is often considered the first person in the US to earn a Ph.D. in industrial psychology.',
          caption: 'Lillian Gilbreth — often cited as the first person in the US to receive a Ph.D. in industrial psychology (Brown University, 1915).'
        }
      ],
      content: (
        <>
          <Callout kind="warn" title="Read this sentence carefully — it is a classic distractor">
            Scientific Management is <strong>NOT</strong> specifically a part of I-O psychology. The
            textbook says it <em>&ldquo;runs parallel to&rdquo;</em> much of the early work in I-O. An MCQ
            option calling Taylor an I-O psychologist, or Scientific Management a branch of I-O, is wrong.
          </Callout>

          <p>
            <strong>Scientific Management</strong> — glossary definition: <em>developed in the early part of
            the twentieth century, an approach meant to use logical, scientific principles in the management
            of organizations, running parallel to much of the work in the early years of I-O psychology.</em>{' '}
            <strong>Frederick Taylor</strong> is the &ldquo;father&rdquo; of the movement.
          </p>

          <Card title="Taylor's core propositions">
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>
                Management should choose the <strong>&ldquo;best man&rdquo;</strong> (his term) for the job.
              </li>
              <li>
                It is management&rsquo;s role to decide the <strong>&ldquo;one best way&rdquo;</strong> to do
                the job.
              </li>
              <li>
                This broke with the prior era, when organizations were managed by <strong>&ldquo;common
                sense&rdquo; and very informal procedures</strong> — e.g., hiring a relative or a
                friend-of-a-friend as a steel worker rather than using a systematic approach — and work often
                lacked standardized procedures.
              </li>
            </ul>
          </Card>

          <Callout kind="danger" title="The critique — Scientific Management's view of human nature">
            Scientific Management took a <strong>rather pessimistic view of human nature</strong>: workers
            were assumed <strong>not to know the best way to do their jobs</strong> (management had to tell
            them) and to be <strong>primarily motivated by money</strong>. This pessimism is exactly what the
            Human Relations movement reacted against.
          </Callout>

          <Table
            headers={['Frank & Lillian Gilbreth', 'Details']}
            rows={[
              ['Who they were', 'A married couple important to both Scientific Management and I-O psychology (Koppes, 1997). Frank was a building contractor and management engineer focused on efficiency.'],
              ['Signature method', 'Among the first to apply the then-new technology of MOTION PICTURES to conduct time-and-motion studies, studying the most efficient ways to work by eliminating unnecessary motions.'],
              ['Lillian’s milestone', 'Often cited as the FIRST person to receive a Ph.D. in industrial psychology — from Brown University in 1915 — earned while parenting her children.'],
              ['Pop-culture hook', '"Cheaper by the Dozen," written by two of their children, named for the Gilbreths’ 12 children (two movies were based on it).'],
              ['Afterward', 'Frank died at age 55; Lillian went on to a long career in consulting and academics.']
            ]}
          />
        </>
      )
    },

    // ------------------------------------------------------------------ 11
    {
      id: 'human-relations',
      title: 'Human Relations Era (1927–1940s): Hawthorne',
      subtitle: 'The illumination studies, the Hawthorne effect, the bank wiring room, and the criticisms',
      content: (
        <>
          <p>
            <strong>Human Relations</strong> — glossary definition: <em>a movement that touted the effects of
            considering workers&rsquo; feelings and attitudes on performance.</em> The textbook frames it as
            arising <strong>&ldquo;perhaps in reaction to&rdquo;</strong> Scientific Management&rsquo;s focus
            on efficiency.
          </p>

          <Callout kind="info" title="Where and when">
            The movement is said by many to have begun at the <strong>Hawthorne Works of Western Electric</strong>{' '}
            (which made telephone equipment) in <strong>Cicero, Illinois</strong>, starting in{' '}
            <strong>1927</strong> (Roethlisberger &amp; Dickson, 1939).
          </Callout>

          <Card title="The illumination study — follow the logic, because MCQs test the surprise">
            <ol className="list-decimal pl-5 space-y-1.5 text-sm">
              <li>
                The <em>original</em> study was really a <strong>Scientific Management&ndash;type study</strong>:
                what is the optimal level of light for worker efficiency?
              </li>
              <li>As researchers <strong>increased</strong> lighting, productivity <strong>increased</strong>.</li>
              <li>
                Much to their surprise, productivity <strong>continued to increase even as researchers
                lowered</strong> the lighting levels.
              </li>
              <li>
                Conclusion: the effects were due to <strong>workers wanting to please the researchers</strong> —
                and productivity could be affected by workers&rsquo; <strong>feelings</strong>.
              </li>
            </ol>
          </Card>

          <Callout kind="danger" title="Glossary term — memorize the wording">
            <strong>Hawthorne effect:</strong> <em>when participants in psychological research behave in
            certain ways because they know that they are in a study.</em> Note that the term is still used in
            psychological research generally, not just I-O.
          </Callout>

          <p>
            <strong>The bank wiring observation room study.</strong> This later Hawthorne study examined how
            workers behaved <strong>in groups</strong>, and concluded that worker behavior is determined{' '}
            <strong>not only by company rules</strong>. Cliques within a work group develop{' '}
            <strong>informal norms</strong> about issues such as how quickly they should work, and workers
            can <strong>pressure each other to enforce these norms</strong>. Unsurprising today, but it had
            been generally ignored by Scientific Management and other management scholars.
          </p>

          <Callout kind="warn" title="The two criticisms — the book gives exactly two">
            The Hawthorne studies have been criticized for (1) being based on <strong>very small sample
            sizes</strong> and (2) a <strong>focus on management&rsquo;s goals rather than those of the
            workers</strong> (e.g., Highhouse, 2020; Sonnenfeld, 1985). Despite this, the focus on worker
            attitudes and group processes is said to have{' '}
            <strong>formed the basis for today&rsquo;s organizational psychology</strong>.
          </Callout>
        </>
      )
    },

    // ------------------------------------------------------------------ 12
    {
      id: 'wwii-civilrights-hightech',
      title: 'WWII, the Civil Rights Era & High-Tech HR',
      subtitle: 'Three eras, three sets of contributions',
      content: (
        <>
          <Card title="World War II (1941–1945)">
            <p className="text-sm mb-2">I-O psychology was again called upon, and made three contributions:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <strong>Selection of enlistees</strong>, including some of the original developments in the use
                of <strong>biographical data (biodata)</strong> in selection (see Ch. 6).
              </li>
              <li>A number of contributions to the <strong>training</strong> of US army personnel.</li>
              <li>
                Recommendations for the <strong>redesign of airplane cockpits</strong> to be standardized and
                consistent, so pilots could move from one plane to another without re-learning the
                instrumentation.
              </li>
            </ul>
            <p className="text-xs text-slate-500 mt-2">
              Also in this window: <strong>1945 — SIOP founded as APA Division 14.</strong>
            </p>
          </Card>

          <Card title="Civil Rights Era (1964–present)">
            <p className="text-sm">
              The textbook calls the <strong>1964 Civil Rights Act</strong> &ldquo;perhaps one of the greatest
              shifts in the practice of I-O psychology,&rdquo; with substantial influence on research as well.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>
                <strong>Before:</strong> a company could use a selection procedure or test{' '}
                <em>without paying attention to whether it adversely affected certain ethnic groups</em>.
              </li>
              <li>
                <strong>After:</strong> organizations were challenged to use selection procedures that were
                fair <em>and defensible in court</em> (Ch. 7).
              </li>
              <li>
                Civil Rights legislation also awakened organizations to the broader concept of{' '}
                <strong>managing diversity</strong> in organizations and on teams.
              </li>
            </ul>
            <p className="text-xs text-slate-500 mt-2">
              Related dates from Figure 1.5: <strong>1978 — Uniform Guidelines on Employee Selection
              Procedures</strong>; <strong>1990 — Americans with Disabilities Act</strong>.
            </p>
          </Card>

          <Card title="High-Tech HR Era (2000–present)">
            <p className="text-sm mb-2">Since about 2000, the delivery of HR functions has changed profoundly:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Paper job applications &rarr; <strong>electronic applications</strong> as the norm.</li>
              <li>
                Applicants reporting to HR to take tests and waiting weeks for results &rarr; tests{' '}
                <strong>administered online and scored immediately</strong>.
              </li>
              <li>
                Training tethered to a live trainer &rarr; training <strong>delivered via the Internet</strong>{' '}
                to locations around the world.
              </li>
              <li>
                <strong>&ldquo;Big data&rdquo;</strong> now allows measures (health, productivity, turnover)
                to be gathered on thousands of employees <strong>in real time</strong> (Oswald et al., 2020).
              </li>
            </ul>
            <Callout kind="danger" title="The central worry of this era">
              The technology is <strong>developing more quickly than the I-O research</strong>, so we are not
              sure which technological developments are helpful and which may actually provide{' '}
              <strong>incorrect information</strong>. The book&rsquo;s case in point: using{' '}
              <strong>social networking sites to screen employees</strong> — a practice that raises legal
              challenges and whose usefulness has been called into question (Van Iddekinge et al., 2013).
            </Callout>
          </Card>
        </>
      )
    },

    // ------------------------------------------------------------------ 13
    {
      id: 'eras-timeline',
      title: 'The Complete Era Timeline (Figure 1.5)',
      subtitle: 'One image that holds most of the memorizable dates in the chapter',
      images: [
        {
          src: `${IMG}/01m_fig1-5_eras_of_io_timeline.png`,
          alt: 'Figure 1.5: a table of the eras of I-O psychology across seven date ranges from 1870-1900 through 2000-present, listing key milestones in each era.',
          caption: 'Figure 1.5 — The eras of industrial and organizational psychology.'
        }
      ],
      content: (
        <>
          <Callout kind="tip" title="Study this one as a table, not a picture">
            Every row is a plausible MCQ. The trap the exam will use is <em>swapping a milestone into the
            wrong era</em> — e.g., putting the Hawthorne studies in the WWII column or SIOP&rsquo;s founding
            in the Civil Rights era.
          </Callout>

          <Table
            headers={['Era', 'Dates', 'Milestones']}
            rows={[
              [
                <strong key="1">Early Years and World War I</strong>,
                '1870–1900 and 1900–1920s',
                'Training of Munsterberg and Cattell by Wundt (1870–1900). 1913: Munsterberg’s Industrial Psychology text published in English. 1917: Army Alpha and Army Beta exams (Scott & Bingham) and Journal of Applied Psychology established by APA. 1905–1920: Scientific Management. 1915: Lillian Gilbreth receives first I/O Ph.D. in the US.'
              ],
              [
                <strong key="2">Human Relations Era Begins</strong>,
                '1927–1940',
                '1927: beginning of the Hawthorne Studies. Beginnings of organizational psychology.'
              ],
              [
                <strong key="3">World War II and Post-War</strong>,
                '1941–1945 and 1946–1963',
                '1945: SIOP founded as APA Div. 14. Post-WWII developments.'
              ],
              [
                <strong key="4">Civil Rights Era</strong>,
                '1964–present',
                '1964: U.S. Civil Rights Act. 1978: Uniform Guidelines on Employee Selection Procedures. 1990: Americans with Disabilities Act.'
              ],
              [
                <strong key="5">High-Tech HR</strong>,
                '2000–present',
                'Beginning of online and high-tech delivery of HR functions.'
              ]
            ]}
          />
        </>
      )
    },

    // ------------------------------------------------------------------ 14
    {
      id: 'global-issues',
      title: 'Global Issues: Multinationals & International Practice',
      subtitle: 'Why globalization reshapes both I-O research questions and I-O training',
      content: (
        <>
          <p>
            <strong>Multinational organizations.</strong> Globalization has increased cross-border work in
            ways unheard of in the last century, creating a need to understand how cross-cultural
            interaction affects teams and organizations. Specific challenges the chapter names:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Different cultures have <strong>different norms for appropriate workplace behaviors</strong> (see Ch. 14).</li>
            <li>Teams now work with <strong>little face-to-face interaction and across time zones</strong>.</li>
            <li>How to deliver <strong>training across large, geographically dispersed organizations</strong>.</li>
            <li>How to develop hiring practices that are <strong>both legal and valid across cultures</strong>.</li>
            <li>How <strong>culture affects leadership and work motivation</strong>.</li>
          </ul>

          <p>
            <strong>International practice.</strong> For most of I-O&rsquo;s history, psychologists were
            trained and practiced <em>within a single country</em>. The rise of multinationals means they now
            need to be prepared to work across many countries and cultures. Two institutional responses:
          </p>
          <Table
            headers={['Response', 'What it does']}
            rows={[
              [
                <strong key="e">EuroPsy</strong>,
                'Assures comparability of training across European countries so psychologists can practice work psychology in different countries (EAWOP, 2020).'
              ],
              [
                <strong key="m">Erasmus Mundus Master in Work, Organizational, and Personnel Psychology</strong>,
                'Provides graduate training from NINE universities across SIX countries — Brazil, Canada, Italy, Spain, Portugal, and the US — giving students educational and practical experience across countries (Griffith et al., 2014).'
              ]
            ]}
          />
          <p className="text-sm text-slate-600">
            Also note the chapter&rsquo;s <em>Legal Issues</em> box: in the US, most legal issues affecting
            I-O originate in <strong>Civil Rights legislation</strong>, specifically in personnel selection
            (Chs. 6 and 7), but Civil Rights laws also apply to <strong>compensation, training, and
            occupational health</strong>.
          </p>
        </>
      )
    },

    // ------------------------------------------------------------------ 15
    {
      id: 'current-issues',
      title: 'Current Issues Shaping I-O (Figure 1.6)',
      subtitle: 'The seven forces: nature of work, diversity, aging, HWP, OHP, big data, growth',
      images: [
        {
          src: `${IMG}/01n_fig1-6_forces_shaping_io.png`,
          alt: 'Figure 1.6: seven colored boxes labeled Changes in the Nature of Work, Diversity Management, Aging Age-Diverse Workforce, Humanitarian Work Psychology, Occupational Health Psychology, I-O as a Growing Field, and Big Data and Analytics.',
          caption: 'Figure 1.6 — Forces shaping research and practice in I-O psychology.'
        }
      ],
      content: (
        <>
          <Card title="1. Changes in the nature of work">
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                Increased <strong>automation is decreasing the need for many low-skills jobs</strong>, while
                the need for <strong>customer service and technical jobs</strong> has increased.
              </li>
              <li>
                Workers must develop new skills just to keep up, and countries must keep workforces
                competitive (Aguinis &amp; Kraiger, 2009).
              </li>
              <li>
                <strong>Telework</strong> — glossary: <em>working from a remote location away from a standard
                office or work site.</em> Gajendran &amp; Harrison (2007) found that{' '}
                <strong>large amounts of telework improved work&ndash;life balance but had a NEGATIVE effect
                on relationships at work</strong>. Telework became the &ldquo;new normal&rdquo; for many
                during the Covid-19 pandemic.
              </li>
            </ul>
          </Card>

          <Card title="2. Diversity and inclusion">
            <p className="text-sm">
              The workforce is becoming more diverse in <strong>race, gender, ethnicity, age, and sexual
              orientation</strong>. The textbook is pointed about the framing:{' '}
              <em>&ldquo;The question is not whether the twenty-first-century workplace will be diverse — that&rsquo;s
              a certainty. Rather, the question is how an organization can effectively manage&rdquo;</em> it —
              through recruitment and selection, training, socialization and mentoring, leadership, and teams.
            </p>
            <Callout kind="info" title="Inclusion — the three-part definition">
              Creating an environment where people from different backgrounds (1) <strong>feel safe to be
              their authentic selves</strong>, (2) experience a <strong>culture at all organizational levels
              that values and supports</strong> people from different backgrounds, and (3){' '}
              <strong>feel connected to supervisors and coworkers and can influence important decisions</strong>{' '}
              (Ferdman, 2014; Roberson, 2019; Shore et al., 2011).
            </Callout>
            <p className="text-sm mt-2">
              Ongoing research issues: the importance of a <strong>diversity climate</strong>, the{' '}
              <strong>effects of diversity on performance</strong>, and the ability to{' '}
              <strong>express one&rsquo;s authentic identity at work</strong> (e.g., among transgender
              employees; Martinez et al., 2017). Roberson et al. (2017) conclude much work remains on the{' '}
              <em>mechanisms</em>, the <em>range of outcomes affected</em>, and <em>how best to promote</em>{' '}
              diversity and inclusion. Diversity management is <strong>not achieved through any one
              organizational practice</strong>.
            </p>
          </Card>

          <Card title="3. Aging, age-diverse workforce">
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <strong>38% of the US workforce is predicted to be over 55 by 2024</strong> (Eurostat, 2020;
                Toossi, 2015).
              </li>
              <li>
                Causes: recent <strong>economic challenges</strong>, and national retirement systems{' '}
                <strong>raising retirement ages</strong> because people live longer and cannot be supported
                through long retirements.
              </li>
              <li>
                Consequences: workers of diverse ages working side by side as never before; organizations
                must support health, well-being and productivity across whole careers (Truxillo et al., 2015).
              </li>
              <li>
                New literature topics: <strong>&ldquo;successful aging at work&rdquo;</strong> (Zacher et al.,
                2018), careers and retirement (Wang &amp; Wanberg, 2017), and{' '}
                <strong>&ldquo;bridge employment&rdquo;</strong> — working beyond standard retirement age
                (von Bonsdorff et al., 2017).
              </li>
              <li>
                Increased attention to <strong>age discrimination against both younger and older</strong>{' '}
                workers.
              </li>
            </ul>
          </Card>

          <Card title="4. Humanitarian Work Psychology (HWP)">
            <p className="text-sm">
              Glossary: <em>focuses on using organizational psychology to improve the welfare of people, not
              only in relatively wealthy industrialized countries, but in low-income nations as well</em>{' '}
              (Olson-Buchanan et al., 2013). It marks a move to widen I-O&rsquo;s scope beyond serving
              organizational needs.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Applications include <strong>poverty reduction</strong> and other humanitarian work (Berry et al., 2011).</li>
              <li>
                Concrete projects: <strong>selecting humanitarian workers operating in disaster zones</strong>{' '}
                and <strong>developing systems to support and train them</strong>.
              </li>
              <li>
                <strong>SIOP has gained non-governmental organization (NGO) status at the United Nations</strong>{' '}
                so as to advise the UN on issues such as poverty eradication (Scott, 2012).
              </li>
            </ul>
          </Card>

          <Card title="5. Occupational Health Psychology (OHP)">
            <p className="text-sm">
              Glossary: <em>a field related to I-O psychology that focuses on a range of topics to benefit
              workers in terms of their health, well-being, and safety.</em> It includes reducing worker
              stress and improving work&ndash;life balance, and draws on <strong>clinical and counseling
              psychology</strong> concepts as well as I-O ones. Covered in Chapter 12.
            </p>
          </Card>

          <Card title="6. Big data and analytics">
            <p className="text-sm mb-2">
              From the Workplace Application box. Big data generally refers to the analysis of{' '}
              <strong>massive datasets including the data of thousands or even millions of people</strong>.
              Oswald et al. (2020) note that many definitions use a set of <strong>&ldquo;V&rdquo; words</strong>:
            </p>
            <Table
              headers={['"V"', 'Meaning']}
              rows={[
                ['Volume', 'A lot of data'],
                ['Variety', 'Everything from card swipes to a Twitter feed'],
                ['Velocity', 'Frequency of the data, rather than something measured at a single time point'],
                ['Veracity', 'Trustworthiness — just because data is available does not mean it is of high quality']
              ]}
            />
            <Callout kind="warn" title="The ethics case study">
              <strong>Facebook, 2012:</strong> intentionally altered the number of positive and negative items
              in users&rsquo; newsfeeds to see if it would affect the types of posts people made. The ethics of
              these studies have been called into question (Goel, 2014). The general challenge is determining{' '}
              <em>which employee data are acceptable to use</em> and <em>which studies are ethically
              acceptable</em>.
            </Callout>
          </Card>

          <Card title="7. I-O is a growing field">
            <p className="text-sm">
              I-O psychology is described as one of the <strong>fastest-growing occupations in the US in terms
              of percentage growth</strong>, with a <strong>&ldquo;bright outlook&rdquo;</strong> per the O*NET
              online database (2020). SIOP (2020) lists the leading challenges: <strong>diversity, inclusion
              and equity; harnessing artificial intelligence at work; helping workers adapt to automation of
              existing jobs; and helping people find meaning in their work.</strong>
            </p>
          </Card>
        </>
      )
    }
  ],

  // ==================================================================== KEY REVIEW
  keyReview: {
    summary: {
      title: 'Chapter 1 — Comprehensive Summary',
      wordCount: 1150,
      paragraphs: [
        'Industrial and organizational (I-O) psychology, often called simply "the psychology of work," is defined as a specialization in psychology focused on the application of psychological principles to understanding people in the workplace. The premise motivating the entire discipline is straightforward but consequential: once a person enters their career, the workplace becomes the setting in which they spend the greatest share of their waking hours until retirement. Understanding how people behave at work, what explains their performance, how they feel about their jobs, and how work spills over into nonwork life is therefore not a narrow specialty question but a question about the majority of adult experience. The field historically comprised two halves. Industrial psychology, at least in the North American tradition, addressed human resource procedures guided by psychological principles — job analysis, personnel selection, performance appraisal, and training. Organizational psychology addressed the "human side" of the worker — motivation, leadership, teams, job satisfaction, and work-life balance — making it a close cousin of Organizational Behavior as taught in business schools, though with a more decidedly psychological orientation. Those halves merged decades ago, and the textbook is emphatic that the dichotomy is "neither accurate nor useful." A single practical problem demonstrates why: hiring an excellent salesperson requires industrial research on structured interviewing and organizational research on what will motivate that person to accept the offer and perform once hired.',

        'I-O is genuinely interdisciplinary, importing theory from across psychology. Basic psychology supplies work on personality, decision-making, and motivation; social psychology supplies group processes, leadership, and communication; cognitive psychology informs performance appraisal, learning, and training; health psychology informs the study of stress; and psychometrics and the individual-differences tradition underwrite personnel selection and placement. What holds these borrowings together is a commitment to scientific principles applied to questions with implications for worker health, well-being, and effectiveness. Organizations as varied as the FBI, NASA, Google, Amazon, Nestlé, and Starbucks, along with public sector, military, nonprofit, and small organizations worldwide, apply core I-O principles to selection, training, and promotion while working to keep employees safe and engaged. Crucially, the field aims to benefit the organization and the worker simultaneously: better person-job matching raises productivity and retention for employers, while much I-O work is directed at improving job attitudes and health outcomes for employees themselves.',

        'Professionally, the field is organized around the Society for Industrial and Organizational Psychology (SIOP), the primary organization for I-O psychologists in the United States and Canada. Established in 1945 as Division 14 of the American Psychological Association, SIOP had over 10,000 members including student affiliates as of 2020, and its annual conference draws upwards of 4,000 attendees. Many members also belong to the Association for Psychological Science. SIOP publishes The Industrial-Organizational Psychologist (TIP), which covers current professional issues, and Industrial and Organizational Psychology: Perspectives on Science and Practice, which covers research topics and controversies. It further supports the field through white papers advising policy-makers and managers, resources for students, and advocacy aimed at lawmakers and the public. Numerous local city- and region-level organizations supplement SIOP, and many academics also belong to the Academy of Management, whose Organizational Behavior, Human Resources, Gender and Diversity, and Research Methods divisions overlap heavily with I-O interests. Internationally, the field is more often called work and organizational psychology. The European Association of Work and Organizational Psychology (EAWOP) comprises 30 constituent national organizations and over 2,000 members, publishes three journals, and holds a biennial congress. Division 1 of the International Association for Applied Psychology publishes Applied Psychology: An International Review and holds the ICAP congress every four years; IAAP itself dates to 1920. SIOP, EAWOP, and IAAP have recently formed the Alliance for Organizational Psychology to coordinate globally.',

        'Training in the field follows a distinctive pattern. To be considered a psychologist in the United States one generally needs doctoral training, and SIOP has articulated twenty-four recommended areas of graduate preparation ranging from ethical and legal issues through research methods, criterion theory, individual assessment, leadership, and work motivation. US and Canadian doctoral training runs at least four years past the bachelor’s degree and includes coursework, research, a thesis and dissertation, and comprehensive exams. A bachelor’s degree in psychology may support work in human resource management, but at least a master’s in I-O is necessary for I-O psychology positions. Admissions turn on GPA (including statistics and research methods coursework), GRE performance, undergraduate research experience, strong letters of reference from faculty who can speak to research skills, and thoughtful program fit. A significant transatlantic contrast exists: in Europe, practitioners typically hold master’s degrees and the doctorate is treated as a purely research credential for those seeking university positions, while EuroPsy exists to make training comparable enough across countries that psychologists can practice work psychology beyond their own borders. Governing all of this is the scientist-practitioner model, a central tenet stipulating that a strong I-O psychologist is both researcher and practitioner. The model runs in both directions: researchers must consider whether their findings will function in field settings, and practitioners must keep current with research so that their recommendations rest on validated theory rather than intuition.',

        'Employment is distributed across five sectors — academic, private industry, government, military, and consulting — with SIOP membership data showing 39 percent academic, 27 percent consultant, 25 percent private industry, 8 percent government, and 1 percent other. Notably, over half of I-O professors now work in schools of business rather than psychology departments, which has provoked ongoing debate about the field’s direction, its training pipeline, and its disciplinary identity. Findings reach the field through three tiers of publication that should not be conflated: rigorously peer-reviewed academic journals such as the Journal of Applied Psychology and Personnel Psychology; practice-oriented outlets such as Harvard Business Review and Sloan Management Review, which translate science with less technical detail; and trade journals such as HR Magazine, which are not peer-reviewed and are not necessarily committed to scientifically validated findings. Conference papers occupy an intermediate position — peer-reviewed, but less rigorously than journal articles, which is exactly why they carry the newest work.',

        'Historically, the field traces to psychologists trained in Wilhelm Wundt’s German laboratory. Hugo Munsterberg came to Harvard, tied individual differences to work performance, and wrote the first I-O textbook (German 1912, English 1913); James McKeen Cattell settled at Columbia, recognized that behavior is not solely a function of environment, and founded the Psychological Corporation in 1921; Walter Dill Scott published influential applied essays at Northwestern and, with Bingham, produced the Army Alpha and Army Beta exams in 1917, the same year APA established the Journal of Applied Psychology. Running parallel — but explicitly not part of I-O psychology — was Scientific Management, founded by Frederick Taylor, which sought to replace "common sense" management with logical principles, urging managers to select the "best man" and determine the "one best way" to perform a job, while assuming pessimistically that workers did not know how best to do their work and were motivated primarily by money. Frank and Lillian Gilbreth advanced this program with motion-picture-based time-and-motion studies; Lillian is often cited as the first person in the US to earn a Ph.D. in industrial psychology, from Brown University in 1915.',

        'The Human Relations era (1927–1940s) arose partly in reaction to that efficiency focus, insisting that workers’ feelings and attitudes affect performance. It is dated to the Hawthorne Works of Western Electric in Cicero, Illinois, where an originally Scientific Management–style illumination study produced a famous surprise: productivity rose when lighting increased and continued rising when lighting was lowered, leading researchers to conclude that workers were responding to the attention itself. This yielded the Hawthorne effect — participants behaving in certain ways because they know they are in a study — a term still in general use. The bank wiring observation room study then showed that behavior is governed not only by company rules but by informal group norms that cliques enforce on one another. Though criticized for very small samples and for privileging management’s goals over workers’, the Hawthorne work is credited with founding modern organizational psychology. World War II again mobilized the field for enlistee selection (including early biodata work), army training, and standardized cockpit redesign, and SIOP was founded in 1945. The 1964 Civil Rights Act then produced what the textbook calls perhaps the greatest shift in I-O practice, ending the era when selection procedures could be used without regard to adverse effects on ethnic groups and forcing procedures to be both fair and legally defensible; the 1978 Uniform Guidelines and the 1990 Americans with Disabilities Act followed. Since roughly 2000, the High-Tech HR era has moved applications, testing, and training online and introduced real-time big data on health, productivity, and turnover — with the caveat that technology is outpacing the research, so it remains unclear which innovations help and which supply misleading information.',

        'Seven forces currently shape the field. Changes in the nature of work include automation reducing low-skill jobs while raising demand for customer service and technical roles, and the spread of telework, which research indicates improves work-life balance but harms workplace relationships when practiced extensively. Diversity and inclusion have become central, with inclusion defined as an environment where people can be authentic, feel supported by culture at every organizational level, and feel connected enough to influence decisions; the textbook stresses that diversity management is achieved through no single practice. The aging, age-diverse workforce — with 38 percent of US workers projected to be over 55 by 2024 — has generated literatures on successful aging at work, retirement, and bridge employment, and has intensified attention to age discrimination against both older and younger workers. Humanitarian work psychology extends organizational psychology to welfare in low-income nations, with SIOP holding NGO status at the United Nations. Occupational health psychology addresses worker health, well-being, safety, stress reduction, and work-life balance, drawing on clinical and counseling psychology. Big data raises questions of volume, variety, velocity, and veracity alongside serious ethical concerns illustrated by Facebook’s 2012 emotional-contagion experiment. Finally, I-O is itself one of the fastest-growing US occupations with a "bright outlook," charged with addressing diversity, equity and inclusion, artificial intelligence at work, adaptation to automation, and helping people find meaning in their work.'
      ]
    },

    numbers: [
      { value: '1945', what: 'SIOP founded as APA Division 14' },
      { value: '10,000+', what: 'SIOP members as of 2020 (incl. student affiliates)' },
      { value: '4,000+', what: 'Attendees at SIOP’s annual conference' },
      { value: '24', what: 'SIOP-recommended areas of graduate training (Table 1.3)' },
      { value: '39% / 27% / 25% / 8% / 1%', what: 'SIOP employment: academic / consultant / private industry / government / other' },
      { value: '30 orgs, 2,000+ members', what: 'EAWOP size; publishes 3 journals; congress every 2 years' },
      { value: '1920', what: 'IAAP founded (one of the oldest psych associations); ICAP every 4 years' },
      { value: '1912 / 1913', what: 'Munsterberg’s text in German / in English' },
      { value: '1917', what: 'Army Alpha & Beta (Scott & Bingham); Journal of Applied Psychology founded by APA' },
      { value: '1921', what: 'Cattell founds the Psychological Corporation' },
      { value: '1915', what: 'Lillian Gilbreth earns first US industrial psych Ph.D. (Brown University)' },
      { value: '1927', what: 'Hawthorne studies begin (Western Electric, Cicero, Illinois)' },
      { value: '1964 / 1978 / 1990', what: 'Civil Rights Act / Uniform Guidelines / Americans with Disabilities Act' },
      { value: '1905–1920', what: 'Scientific Management era (Taylor)' },
      { value: '12', what: 'Gilbreth children ("Cheaper by the Dozen")' },
      { value: '38% by 2024', what: 'Projected share of US workforce over age 55' },
      { value: '9 universities, 6 countries', what: 'Erasmus Mundus Master in Work, Organizational & Personnel Psychology' },
      { value: '> 50%', what: 'Share of I-O professors now working in Schools of Business' }
    ],

    vocab: [
      { term: 'I-O psychology', tag: 'Core', tagColor: 'sky', def: 'A specialization in psychology focused on the application of psychological principles to understanding people in the workplace. Also called "the psychology of work."' },
      { term: 'Industrial psychology', tag: 'Half of field', def: 'Traditionally, the North American focus on HR procedures guided by psychological principles: job analysis, personnel selection, performance appraisal, and training.' },
      { term: 'Organizational psychology', tag: 'Half of field', def: 'The focus on the "human side" of the worker: work motivation, leadership, teams, job satisfaction, work-life balance. Resembles Organizational Behavior in business schools but is more psychological.' },
      { term: 'Work and organizational psychology', tag: 'Terminology', tagColor: 'amber', def: 'The term used for the field in many parts of the world, such as Europe.' },
      { term: 'SIOP', tag: 'Organization', tagColor: 'green', def: 'Society for Industrial and Organizational Psychology — the primary professional organization for I-O psychologists in the US and Canada. Founded 1945; APA Division 14; 10,000+ members as of 2020.' },
      { term: 'EAWOP', tag: 'Organization', tagColor: 'green', def: 'European Association of Work and Organizational Psychology — one of the largest I-O organizations; 30 constituent organizations from different European countries; 2,000+ members; three journals; biennial congress.' },
      { term: 'IAAP Div. 1', tag: 'Organization', tagColor: 'green', def: 'Division 1 (Work and Organizational Psychology) of the International Association for Applied Psychology. Publishes Applied Psychology: An International Review. IAAP dates to 1920; ICAP conference every four years.' },
      { term: 'Alliance for Organizational Psychology (AOP)', tag: 'Organization', tagColor: 'green', def: 'A worldwide alliance formed by SIOP, EAWOP, and IAAP to increase communication among I-O professional organizations and increase the global visibility of I-O psychology.' },
      { term: 'Academy of Management (AoM)', tag: 'Organization', tagColor: 'green', def: 'Management-focused association to which many I-O psychologists, particularly academics, belong. Relevant divisions: Organizational Behavior, Human Resources, Gender and Diversity, Research Methods.' },
      { term: 'EuroPsy', tag: 'Credential', tagColor: 'violet', def: 'The European Certificate in Psychology — provides a standard for evaluating the professional training of psychologists in Europe, including a subspecialty in work and organizational psychology, so psychologists can practice across European countries.' },
      { term: 'Scientist-practitioner model', tag: 'Core', tagColor: 'sky', def: 'A central tenet of I-O psychology stating that a strong I-O psychologist will be both a scientist/researcher and a strong practitioner. From SIOP’s (2016) training guidelines.' },
      { term: 'TIP', tag: 'Publication', def: 'The Industrial-Organizational Psychologist — SIOP’s publication keeping members up to date on current professional issues (e.g., employment laws).' },
      { term: 'Peer review', tag: 'Publication', def: 'Process in which other experts in I-O psychology evaluate articles for rigor and contribution before publication. Journals apply it most rigorously; conference papers are peer-reviewed but less rigorously; trade journals generally are not peer-reviewed.' },
      { term: 'Trade journals', tag: 'Publication', tagColor: 'amber', def: 'Publications targeting consumers of I-O research (HR Magazine, People Management, HR Focus, T+D). Not peer-reviewed and not necessarily committed to communicating scientifically validated findings.' },
      { term: 'Hugo Munsterberg', tag: 'Person', tagColor: 'violet', def: 'German psychologist trained under Wundt who came to Harvard; tied individual differences to work performance and wrote the first I-O psychology textbook (German 1912; English 1913).' },
      { term: 'James McKeen Cattell', tag: 'Person', tagColor: 'violet', def: 'American psychologist trained under Wundt; spent most of his career at Columbia. Among the first to recognize that behavior is not solely a function of the environment. Founded the Psychological Corporation in 1921.' },
      { term: 'Walter Dill Scott', tag: 'Person', tagColor: 'violet', def: 'American trained in Wundt’s lab; at Northwestern. Known for essays applying psychology to industrial settings, focused on application rather than theory. With Bingham, developed the Army Alpha and Army Beta exams (1917).' },
      { term: 'Scientific Management', tag: 'Movement', tagColor: 'amber', def: 'Developed in the early twentieth century; an approach meant to use logical, scientific principles in the management of organizations, running parallel to (but NOT part of) early I-O psychology.' },
      { term: 'Frederick Taylor', tag: 'Person', tagColor: 'violet', def: 'The "father" of Scientific Management. Proposed a break from "common sense" management: management should choose the "best man" for a job and determine the "one best way" of doing it.' },
      { term: 'Frank and Lillian Gilbreth', tag: 'Person', tagColor: 'violet', def: 'A couple important to Scientific Management and I-O psychology, focused on workplace efficiency. Pioneered motion-picture time-and-motion studies. Lillian is often cited as the first person in the US to earn a Ph.D. in industrial psychology (Brown, 1915).' },
      { term: 'Time-and-motion studies', tag: 'Method', tagColor: 'blue', def: 'Studies of the most efficient way to perform work by eliminating unnecessary motions; the Gilbreths were among the first to use motion pictures for this.' },
      { term: 'Human Relations', tag: 'Movement', tagColor: 'amber', def: 'A movement that touted the effects of considering workers’ feelings and attitudes on performance. Dated 1927–1940s; began at the Hawthorne Works.' },
      { term: 'Hawthorne effect', tag: 'Core', tagColor: 'sky', def: 'When participants in psychological research behave in certain ways because they know that they are in a study.' },
      { term: 'Bank wiring observation room study', tag: 'Study', def: 'A Hawthorne study of group behavior. Concluded that worker behavior is determined not only by company rules: cliques develop informal norms (e.g., how quickly to work) and workers pressure each other to enforce them.' },
      { term: 'Telework', tag: 'Current issue', tagColor: 'red', def: 'Working from a remote location away from a standard office or work site. Gajendran & Harrison (2007): large amounts improved work-life balance but negatively affected workplace relationships.' },
      { term: 'Inclusion', tag: 'Current issue', tagColor: 'red', def: 'Creating an environment where people from different backgrounds feel safe to be their authentic selves, where culture at all levels values and supports them, and where they feel connected and able to influence important decisions.' },
      { term: 'Bridge employment', tag: 'Current issue', tagColor: 'red', def: 'Working beyond standard retirement age.' },
      { term: 'Humanitarian work psychology (HWP)', tag: 'Current issue', tagColor: 'red', def: 'Focuses on using organizational psychology to improve the welfare of people, not only in relatively wealthy industrialized countries but in low-income nations as well.' },
      { term: 'Occupational health psychology (OHP)', tag: 'Current issue', tagColor: 'red', def: 'A field related to I-O psychology that focuses on a range of topics to benefit workers in terms of their health, well-being, and safety — including reducing stress and improving work-life balance. Draws on clinical and counseling psychology as well as I-O.' },
      { term: 'Big data', tag: 'Current issue', tagColor: 'red', def: 'Analysis of massive datasets including data on thousands or millions of people. Characterized by volume, variety, velocity, and veracity (Oswald et al., 2020).' }
    ],

    laws: [
      { name: 'The merger principle', desc: 'Industrial and organizational psychology merged decades ago; there is no longer a separate "industrial" or "organizational" psychology, because the dichotomy is neither accurate nor useful and concepts from each inform the other.' },
      { name: 'The dual-benefit principle', desc: 'I-O psychology aims to benefit both the organization (productivity, retention through better person-job fit) AND the worker (positive job attitudes, health outcomes). Never one at the exclusion of the other.' },
      { name: 'Scientist-practitioner model', desc: 'Researchers must consider field applicability; practitioners must ground recommendations in strong research. Individuals vary in emphasis, but the goal is to blend the two whenever possible.' },
      { name: 'The three-tier publication hierarchy', desc: 'Academic journals (rigorous peer review) > conference papers (peer-reviewed but less rigorously; most current) > practice-oriented journals (science translated, less technical) > trade journals (not peer-reviewed, not necessarily validated).' },
      { name: 'Scientific Management is parallel, not internal', desc: 'Taylor’s Scientific Management is explicitly described as NOT specifically a part of I-O psychology; it runs parallel to early I-O work.' },
      { name: 'The Hawthorne surprise', desc: 'Productivity increased when lighting was raised AND when it was lowered — implying that the effect came from workers knowing they were being studied, not from the physical manipulation.' },
      { name: 'Technology outpaces research (High-Tech HR era)', desc: 'New HR technology is developing faster than I-O research can evaluate it, so it is unclear which developments help and which produce incorrect information (e.g., social-media screening).' },
      { name: 'Diversity is a certainty; management is the question', desc: 'The question is not whether the 21st-century workplace will be diverse, but how organizations effectively manage that diversity — and no single practice achieves it.' }
    ],

    methods: [
      { name: 'MUNS-CAT-SCOTT', expand: 'Munsterberg → Cattell → Scott', desc: 'The three Wundt-lineage founders in the order the chapter introduces them: Munsterberg (Harvard, first textbook), Cattell (Columbia, Psych Corp 1921), Scott (Northwestern, Army Alpha/Beta 1917).' },
      { name: 'Four V’s of big data', expand: 'Volume, Variety, Velocity, Veracity', desc: 'Volume = a lot of data; Variety = card swipes to Twitter feeds; Velocity = frequency rather than single time point; Veracity = trustworthiness / quality.' },
      { name: 'A-C-P-G-M', expand: 'Academic 39, Consultant 27, Private industry 25, Government 8, Military/other', desc: 'Employment sectors ranked by SIOP percentages. Remember consulting beats private industry.' },
      { name: 'Taylor’s two "bests"', expand: '"Best man" + "one best way"', desc: 'Management picks the best man for the job and decides the one best way to do it — the two slogans that define Scientific Management.' },
      { name: 'Hawthorne timeline', expand: '1927 illumination → Hawthorne effect → bank wiring room', desc: 'Started as a Scientific Management lighting study, produced the Hawthorne effect, then extended to group norms in the bank wiring observation room.' },
      { name: 'The seven forces (Figure 1.6)', expand: 'Work, Diversity, Aging, HWP, OHP, Big Data, Growth', desc: 'Changes in the Nature of Work; Diversity Management; Aging/Age-Diverse Workforce; Humanitarian Work Psychology; Occupational Health Psychology; Big Data and Analytics; I-O as a Growing Field.' },
      { name: 'Grad school five', expand: 'GPA, GRE, Research, Letters, Fit', desc: 'The five admissions criteria in the order the chapter lists them.' }
    ]
  },

  // ==================================================================== QUESTIONS
  questions: [
    {
      q: 'According to the textbook, I-O psychology is best defined as:',
      type: 'mcq',
      choices: [
        'The study of mental illness among employed adults',
        'A specialization in psychology focused on the application of psychological principles to understanding people in the workplace',
        'The management discipline concerned with maximizing shareholder value through human capital',
        'A branch of sociology examining how organizations shape social class'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'This is the glossary definition given in Chapter 1, word for word. I-O psychology is also called "the psychology of work." It is a psychology specialization, not a management or sociology discipline, and it concerns normal workplace behavior rather than mental illness.'
    },
    {
      q: 'Which cluster of topics belongs to the traditional "industrial" side of I-O psychology?',
      type: 'mcq',
      choices: [
        'Work motivation, leadership, teams, and job satisfaction',
        'Job analysis, personnel selection, performance appraisal, and training',
        'Stress, work-life balance, and occupational safety',
        'Organizational structure, culture, and change'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'Industrial psychology traditionally covers human resource procedures guided by psychological principles: job analysis, personnel selection, performance appraisal, and training. Motivation, leadership, teams, and job satisfaction are the organizational side.'
    },
    {
      q: 'The textbook argues that the industrial/organizational dichotomy is "neither accurate nor useful" primarily because:',
      type: 'mcq',
      choices: [
        'Organizational psychology has been absorbed entirely into business schools',
        'Industrial psychology was discredited after the Civil Rights Act',
        'Concepts from both areas inform one another, so any separation is artificial',
        'Only organizational psychology is recognized outside the United States'
      ],
      correct: 2,
      difficulty: 'M',
      explanation: 'The book states both areas are concerned with the psychology of work and that concepts from each inform the other. Its example: hiring a salesperson requires industrial research on structured interviewing plus organizational research on motivation.'
    },
    {
      q: 'In Figure 1.1, which branch of psychology is credited with contributing to personnel selection and placement?',
      type: 'mcq',
      choices: [
        'Health psychology',
        'Social psychology',
        'Cognitive psychology',
        'Psychometrics and individual differences'
      ],
      correct: 3,
      difficulty: 'M',
      explanation: 'Figure 1.1 maps psychometrics and individual differences onto personnel selection and placement. Health psychology contributes stress; social psychology contributes group processes and leadership; cognitive psychology contributes performance appraisal and learning.'
    },
    {
      q: 'SIOP was established in which year, and as what?',
      type: 'mcq',
      choices: [
        '1917, as a wartime testing committee',
        '1945, as Division 14 of the American Psychological Association',
        '1964, as a response to the Civil Rights Act',
        '1921, as a branch of the Psychological Corporation'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'SIOP was established in 1945 as Division 14 of APA. As of 2020 it had over 10,000 members including student affiliates. 1917 is Army Alpha/Beta, 1964 is the Civil Rights Act, and 1921 is Cattell’s Psychological Corporation.'
    },
    {
      q: 'Which SIOP publication is described as keeping members up to date on current professional issues such as employment laws?',
      type: 'mcq',
      choices: [
        'Journal of Applied Psychology',
        'Industrial and Organizational Psychology: Perspectives on Science and Practice',
        'The Industrial-Organizational Psychologist (TIP)',
        'Personnel Psychology'
      ],
      correct: 2,
      difficulty: 'M',
      explanation: 'TIP covers current professional issues. Perspectives on Science and Practice covers current research and practice topics and controversies. Journal of Applied Psychology and Personnel Psychology are top academic journals but are not SIOP’s professional newsletter.'
    },
    {
      q: 'EAWOP is made up of approximately how many constituent organizations, and how often is its conference held?',
      type: 'mcq',
      choices: [
        '30 organizations; every two years',
        '14 organizations; annually',
        '30 organizations; every four years',
        '9 organizations; every two years'
      ],
      correct: 0,
      difficulty: 'H',
      explanation: 'EAWOP comprises 30 organizations from different European countries, has over 2,000 members, publishes three journals, and holds its conference every two years in a different European country. The "every four years" conference is ICAP (IAAP).'
    },
    {
      q: 'In many parts of the world, particularly Europe, the field that Americans call I-O psychology is known as:',
      type: 'mcq',
      choices: [
        'Applied behavioral science',
        'Occupational health psychology',
        'Work and organizational psychology',
        'Personnel science'
      ],
      correct: 2,
      difficulty: 'E',
      explanation: '"Work and organizational psychology" is a glossary term in Chapter 1. Occupational health psychology is a distinct related field focused on health, well-being, and safety.'
    },
    {
      q: 'The Alliance for Organizational Psychology (AOP) was formed by which three organizations?',
      type: 'mcq',
      choices: [
        'SIOP, APA, and APS',
        'SIOP, EAWOP, and IAAP',
        'EAWOP, AoM, and IAAP',
        'SIOP, AoM, and the British Psychological Society'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'SIOP, EAWOP, and IAAP agreed to form AOP as a worldwide alliance to increase communication among I-O professional organizations and raise the field’s global visibility.'
    },
    {
      q: 'What is EuroPsy?',
      type: 'mcq',
      choices: [
        'The European Association of Work and Organizational Psychology’s flagship journal',
        'A certificate providing a standard for evaluating the professional training of psychologists in Europe, including a work and organizational subspecialty',
        'The European equivalent of the GRE, required for graduate admission',
        'A biennial conference rotating among European capitals'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'EuroPsy is the European Certificate in Psychology, created to assure comparability of training across European countries so psychologists can practice work psychology in different countries.'
    },
    {
      q: 'How many key areas of training does SIOP recommend for doctoral preparation in I-O psychology (Table 1.3)?',
      type: 'mcq',
      choices: ['14', '18', '24', '30'],
      correct: 2,
      difficulty: 'M',
      explanation: 'SIOP’s guidelines list 24 areas, from ethical/legal/diversity/international issues and research methods through leadership, occupational health and safety, and work motivation. (14 is APA’s division number for SIOP; 30 is EAWOP’s constituent-organization count.)'
    },
    {
      q: 'Which statement accurately captures the US/Canada versus Europe difference in I-O training?',
      type: 'mcq',
      choices: [
        'In Europe, most who plan to work in organizational settings acquire master’s degrees, with the Ph.D. treated as a purely research degree',
        'In Europe, a doctorate is legally required to practice work psychology in any setting',
        'In the US, a bachelor’s degree is sufficient for most I-O psychology positions',
        'In Canada, only the Psy.D. is recognized for organizational practice'
      ],
      correct: 0,
      difficulty: 'H',
      explanation: 'The textbook flags this as a key difference: in Europe, practitioners typically hold master’s degrees and the Ph.D. is pursued mainly by those wanting university jobs. In the US, at least a master’s in I-O is necessary for I-O psychology jobs — a bachelor’s may support HR management work instead.'
    },
    {
      q: 'The scientist-practitioner model holds that:',
      type: 'mcq',
      choices: [
        'I-O psychologists should specialize exclusively in either research or application to avoid diluting expertise',
        'A strong I-O psychologist will be both a scientist/researcher and a strong practitioner',
        'Practitioners should defer entirely to academic researchers on all organizational recommendations',
        'Research should be conducted only in laboratory settings to protect internal validity'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'This is the glossary definition. The model runs both ways: researchers must consider field applicability, and practitioners must keep up with research so recommendations rest on validated findings. Individuals emphasize each to varying degrees, but the goal is to blend them.'
    },
    {
      q: 'According to Figure 1.4, what percentage of SIOP membership works in academic settings?',
      type: 'mcq',
      choices: ['25%', '27%', '39%', '8%'],
      correct: 2,
      difficulty: 'M',
      explanation: 'Academic 39%, Consultant 27%, Private Industry 25%, Government 8%, Other 1%. Note that consulting slightly outranks private industry — a common distractor pairing.'
    },
    {
      q: 'Which employment sector accounts for the SECOND largest share of SIOP membership?',
      type: 'mcq',
      choices: ['Private industry', 'Consulting', 'Government', 'Military'],
      correct: 1,
      difficulty: 'H',
      explanation: 'Consulting is 27%, just ahead of private industry at 25%. Academic leads at 39%, government trails at 8%.'
    },
    {
      q: 'The textbook notes an ongoing identity debate in I-O psychology stemming from the fact that:',
      type: 'mcq',
      choices: [
        'Most I-O psychologists now work for the military',
        'Over half of I-O psychology professors work in Schools of Business',
        'SIOP has separated from the American Psychological Association',
        'Master’s-level practitioners now outnumber doctoral-level ones in academia'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Over half of I-O professors work in Schools of Business, usually Departments of Management. This provokes discussion about the field’s direction, future training, and whether I-O psychologists are more psychology or business scholars (Aguinis et al., 2014).'
    },
    {
      q: 'Which of the following is NOT peer-reviewed, according to the chapter?',
      type: 'mcq',
      choices: [
        'Journal of Applied Psychology',
        'Papers presented at the SIOP annual conference',
        'HR Magazine',
        'Personnel Psychology'
      ],
      correct: 2,
      difficulty: 'M',
      explanation: 'Trade journals such as HR Magazine, People Management, HR Focus, and T+D tend not to be peer-reviewed and are not necessarily committed to communicating scientifically validated findings. Conference papers ARE peer-reviewed, though less rigorously than journal articles.'
    },
    {
      q: 'Why does the textbook say conference presentations are valuable despite less rigorous peer review?',
      type: 'mcq',
      choices: [
        'They are cheaper to publish than journal articles',
        'They allow I-O psychologists to learn some of the most current research on a topic',
        'They are legally admissible in employment discrimination cases',
        'They are written for non-technical audiences'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Precisely because they precede the slower journal process, conference papers convey the most current research. The "written for non-technical audiences" description fits practice-oriented journals such as Harvard Business Review.'
    },
    {
      q: 'Hugo Munsterberg is best known in I-O history for:',
      type: 'mcq',
      choices: [
        'Founding the Psychological Corporation',
        'Developing the Army Alpha and Army Beta exams',
        'Writing the first I-O psychology textbook and tying individual differences to work performance',
        'Conducting the Hawthorne illumination studies'
      ],
      correct: 2,
      difficulty: 'E',
      explanation: 'Munsterberg, a German trained under Wundt who came to Harvard, tied individual differences to work performance and wrote the first I-O textbook (German 1912, English 1913). Cattell founded the Psychological Corporation; Scott and Bingham developed Army Alpha/Beta.'
    },
    {
      q: 'James McKeen Cattell founded which organization, and in what year?',
      type: 'mcq',
      choices: [
        'The Psychological Corporation, 1921',
        'SIOP, 1945',
        'The Journal of Applied Psychology, 1917',
        'The American Psychological Association, 1892'
      ],
      correct: 0,
      difficulty: 'M',
      explanation: 'Cattell founded the Psychological Corporation in 1921, a major publisher of tests in the US for generations (now absorbed by larger test publishing houses). He spent most of his career at Columbia University.'
    },
    {
      q: 'The Army Alpha and Army Beta exams were developed in 1917 by:',
      type: 'mcq',
      choices: [
        'Munsterberg and Cattell',
        'Scott and Bingham',
        'Taylor and the Gilbreths',
        'Roethlisberger and Dickson'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Figure 1.5 attributes Army Alpha and Army Beta to Scott and Bingham in 1917 — the same year APA established the Journal of Applied Psychology. Roethlisberger and Dickson are associated with the Hawthorne studies.'
    },
    {
      q: 'Which statement about Scientific Management is correct?',
      type: 'mcq',
      choices: [
        'It is a formal subdiscipline of I-O psychology founded by Munsterberg',
        'It is not specifically a part of I-O psychology, but runs parallel to much of the early work in the field',
        'It emerged as a reaction against the Human Relations movement',
        'It emphasized workers’ feelings and attitudes as determinants of performance'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'The textbook explicitly says Scientific Management is not specifically a part of I-O psychology but runs parallel to it. The chronology is also reversed in option C: Human Relations arose partly in reaction to Scientific Management, not the other way around.'
    },
    {
      q: 'Taylor’s Scientific Management is characterized in the textbook as taking what view of human nature?',
      type: 'mcq',
      choices: [
        'Optimistic — assuming workers naturally seek mastery and responsibility',
        'Neutral — treating motivation as irrelevant to productivity',
        'Rather pessimistic — assuming workers do not know the best way to do their jobs and are primarily motivated by money',
        'Developmental — assuming workers’ motives shift predictably with tenure'
      ],
      correct: 2,
      difficulty: 'M',
      explanation: 'The book states Scientific Management took a rather pessimistic view: management had to tell workers the best way to do their jobs, and people were assumed to be motivated primarily by money. This is exactly what the Human Relations movement reacted against.'
    },
    {
      q: 'Lillian Gilbreth is often cited as:',
      type: 'mcq',
      choices: [
        'The first woman to lead the American Psychological Association',
        'The first person in the US to receive a Ph.D. in industrial psychology, from Brown University in 1915',
        'The originator of the term "Hawthorne effect"',
        'The founder of the first I-O consulting firm'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Lillian Gilbreth earned her industrial psychology Ph.D. from Brown University in 1915 — while parenting her children. She and Frank pioneered motion-picture time-and-motion studies; after Frank died at 55 she continued a long career in consulting and academics.'
    },
    {
      q: 'The Gilbreths were among the first to apply which then-new technology to the study of work?',
      type: 'mcq',
      choices: [
        'The telephone',
        'Punch-card tabulating machines',
        'Motion pictures',
        'The stopwatch'
      ],
      correct: 2,
      difficulty: 'M',
      explanation: 'They used motion pictures to conduct time-and-motion studies, identifying the most efficient ways to work by eliminating unnecessary motions.'
    },
    {
      q: 'The Hawthorne illumination study produced a surprising result. What was it?',
      type: 'mcq',
      choices: [
        'Productivity fell sharply once lighting exceeded an optimal threshold',
        'Productivity continued to increase even as researchers lowered the lighting levels',
        'Productivity was unaffected by lighting but strongly affected by wage rates',
        'Productivity increased only for workers who were told the purpose of the study'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'Productivity rose as lighting increased and kept rising as it was lowered. Researchers concluded the effect came from workers wanting to please the researchers — productivity could be affected by workers’ feelings.'
    },
    {
      q: 'The Hawthorne effect refers to:',
      type: 'mcq',
      choices: [
        'The tendency of supervisors to rate all employees near the scale midpoint',
        'The productivity gain that follows any increase in workplace illumination',
        'When participants in psychological research behave in certain ways because they know that they are in a study',
        'The tendency of informal work groups to restrict output below management targets'
      ],
      correct: 2,
      difficulty: 'E',
      explanation: 'This is the glossary definition, and the term remains in general use across psychological research. Option D describes the informal group norms found in the bank wiring observation room study, which is a different Hawthorne finding.'
    },
    {
      q: 'The bank wiring observation room study concluded that:',
      type: 'mcq',
      choices: [
        'Worker behavior is determined not only by company rules, because cliques develop informal norms that workers enforce on each other',
        'Wage incentives are the single strongest determinant of output',
        'Lighting levels interact with group size to determine productivity',
        'Supervisory style has no measurable effect on group output'
      ],
      correct: 0,
      difficulty: 'M',
      explanation: 'The bank wiring room study examined group behavior and found informal norms about issues such as how quickly to work, enforced through peer pressure. The textbook notes this was largely ignored by Scientific Management and other management scholars at the time.'
    },
    {
      q: 'Which two criticisms of the Hawthorne studies does the textbook name?',
      type: 'mcq',
      choices: [
        'Failure to obtain informed consent and lack of a control group',
        'Very small sample sizes and a focus on management’s goals rather than workers’ goals',
        'Reliance on self-report measures and failure to replicate outside manufacturing',
        'Statistical errors in the illumination data and misattribution of authorship'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'Highhouse (2020) and Sonnenfeld (1985) are cited for these two critiques. Despite them, the studies’ focus on worker attitudes and group processes is said to have formed the basis of today’s organizational psychology.'
    },
    {
      q: 'Which of the following was NOT among I-O psychology’s World War II contributions listed in the chapter?',
      type: 'mcq',
      choices: [
        'Selection of enlistees, including early developments in the use of biographical data',
        'Contributions to the training of US army personnel',
        'Recommendations for standardizing airplane cockpit design',
        'Development of the first structured performance appraisal system for federal civil servants'
      ],
      correct: 3,
      difficulty: 'H',
      explanation: 'The chapter lists exactly three WWII contributions: enlistee selection (including early biodata work), army training, and standardized cockpit redesign so pilots could switch planes without relearning instrumentation.'
    },
    {
      q: 'What change did the 1964 Civil Rights Act produce in personnel selection practice?',
      type: 'mcq',
      choices: [
        'It required all selection tests to be administered online and scored immediately',
        'It made it necessary for selection procedures to be fair and defensible in court, where previously adverse effects on ethnic groups could be ignored',
        'It abolished the use of cognitive ability testing in federal hiring',
        'It transferred responsibility for selection research from SIOP to the Department of Labor'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Before 1964 a company could use a selection procedure without regard to whether it adversely affected certain ethnic groups. The Act put fairness front and center and required procedures to be defensible in court. It also awakened organizations to broader diversity management.'
    },
    {
      q: 'According to Figure 1.5, the Uniform Guidelines on Employee Selection Procedures date to:',
      type: 'mcq',
      choices: ['1964', '1972', '1978', '1990'],
      correct: 2,
      difficulty: 'H',
      explanation: 'Figure 1.5 places the Uniform Guidelines at 1978, within the Civil Rights era (1964–present). 1964 is the Civil Rights Act itself; 1990 is the Americans with Disabilities Act.'
    },
    {
      q: 'What does the textbook identify as the central concern of the High-Tech HR era?',
      type: 'mcq',
      choices: [
        'Technology is developing more quickly than the I-O research, so it is unclear which developments help and which may provide incorrect information',
        'Online testing has been shown to be less reliable than paper testing in every documented case',
        'Big data has eliminated the need for traditional job analysis',
        'Employers have largely abandoned electronic applications due to legal exposure'
      ],
      correct: 0,
      difficulty: 'M',
      explanation: 'The book’s case in point is using social networking sites to screen employees — a practice that raises legal challenges and whose usefulness has been questioned (Van Iddekinge et al., 2013).'
    },
    {
      q: 'In the big data literature, "veracity" refers to:',
      type: 'mcq',
      choices: [
        'The sheer quantity of data collected',
        'The range of data types, from card swipes to social media feeds',
        'How frequently data are collected rather than at a single time point',
        'The trustworthiness of the data — availability does not imply quality'
      ],
      correct: 3,
      difficulty: 'H',
      explanation: 'Oswald et al. (2020) list volume (quantity), variety (types), velocity (frequency), and veracity (trustworthiness). The veracity caution is that just because a certain type of data is available does not mean it is of high quality.'
    },
    {
      q: 'The 2012 Facebook study cited in the chapter raised ethical concerns because researchers:',
      type: 'mcq',
      choices: [
        'Sold user data to employers for pre-employment screening',
        'Intentionally altered the number of positive and negative items in users’ newsfeeds to see whether it affected the posts people made',
        'Published identifiable employee performance records',
        'Used facial recognition to infer applicant personality'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'The Facebook emotional-contagion experiment manipulated newsfeed valence to observe downstream posting behavior. Goel (2014) is cited on the resulting ethics debate about which big-data studies are acceptable.'
    },
    {
      q: 'Gajendran and Harrison (2007) found that large amounts of telework:',
      type: 'mcq',
      choices: [
        'Improved both work-life balance and workplace relationships',
        'Improved work-life balance but had a negative effect on relationships at work',
        'Harmed work-life balance but improved workplace relationships',
        'Had no measurable effect on either outcome'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'This trade-off is the reason telework is treated as a live research question rather than an unambiguous good. Employees became widely familiar with telework’s advantages and disadvantages during the Covid-19 pandemic.'
    },
    {
      q: 'The chapter’s definition of inclusion includes all of the following EXCEPT:',
      type: 'mcq',
      choices: [
        'Creating an environment where people from different backgrounds feel safe to be their authentic selves',
        'Promoting a culture at all organizational levels that values and supports people from different backgrounds',
        'Ensuring people feel connected to supervisors and coworkers and can influence important decisions',
        'Establishing numerical hiring quotas for each demographic group represented in the labor market'
      ],
      correct: 3,
      difficulty: 'M',
      explanation: 'The textbook’s definition has three components — authenticity, supportive culture at all levels, and connection plus influence over decisions. Quotas are not part of the definition given.'
    },
    {
      q: 'What proportion of the US workforce is predicted to be over age 55 by 2024?',
      type: 'mcq',
      choices: ['18%', '25%', '38%', '52%'],
      correct: 2,
      difficulty: 'H',
      explanation: '38 percent (Eurostat, 2020; Toossi, 2015). Drivers include economic challenges and national retirement systems raising retirement ages because people live longer and cannot be supported through long retirements.'
    },
    {
      q: '"Bridge employment" refers to:',
      type: 'mcq',
      choices: [
        'Temporary assignments that connect two permanent roles within a company',
        'Working beyond standard retirement age',
        'Employment funded jointly by a university and an industry partner',
        'Contract work bridging a gap in an employee’s résumé'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Bridge employment is working beyond standard retirement age (von Bonsdorff et al., 2017), one of several topics — along with "successful aging at work" — that the aging workforce has pushed into the I-O literature.'
    },
    {
      q: 'Humanitarian work psychology (HWP) is best described as:',
      type: 'mcq',
      choices: [
        'The study of burnout among nonprofit employees in wealthy nations',
        'Using organizational psychology to improve the welfare of people, not only in wealthy industrialized countries but in low-income nations as well',
        'A regulatory framework governing international labor standards',
        'The application of clinical psychology to disaster survivors'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'HWP (Olson-Buchanan et al., 2013) widens I-O’s scope beyond serving organizational needs to include poverty reduction and humanitarian work. Projects include selecting humanitarian workers for disaster zones and building systems to support and train them.'
    },
    {
      q: 'SIOP’s relationship to the United Nations is that SIOP:',
      type: 'mcq',
      choices: [
        'Administers the UN’s internal employee selection system',
        'Has gained non-governmental organization (NGO) status so as to advise the UN on issues such as poverty eradication',
        'Holds a permanent voting seat on the UN Economic and Social Council',
        'Has no formal relationship with the United Nations'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'Scott (2012) is cited: SIOP gained NGO status at the UN to be better positioned to advise on key issues such as poverty eradication — a concrete instance of humanitarian work psychology.'
    },
    {
      q: 'Occupational health psychology (OHP) is described as drawing on which fields in addition to I-O psychology?',
      type: 'mcq',
      choices: [
        'Clinical and counseling psychology',
        'Developmental and educational psychology',
        'Neuropsychology and psychopharmacology',
        'Forensic psychology and criminology'
      ],
      correct: 0,
      difficulty: 'M',
      explanation: 'OHP focuses on worker health, well-being, and safety — including reducing stress and improving work-life balance — and involves clinical and counseling psychology concepts as well as I-O ones. It is covered in Chapter 12.'
    },
    {
      q: 'Which of the following is one of the three reasons the textbook gives for studying I-O’s history?',
      type: 'mcq',
      choices: [
        'Historical methods are the primary research design used in modern I-O psychology',
        'Understanding the roots of I-O is necessary to understanding the profession’s nature, goals, and focus',
        'Licensure boards test historical knowledge on the practice examination',
        'Historical claims are legally privileged in employment litigation'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'The three reasons are: (1) roots explain the profession’s nature, goals and focus; (2) seeing where the field has been helps explain where it is headed; (3) knowing what has been studied shows where to go next.'
    },
    {
      q: 'The textbook uses leadership research to illustrate a historical pattern. What is that pattern?',
      type: 'mcq',
      choices: [
        'A steady linear accumulation of findings with no reversals',
        'A trait approach that fell out of favor long ago and is now being revived with a new twist — which traits lead to success in certain situations',
        'A move away from personality entirely toward purely behavioral accounts',
        'A complete replacement of laboratory research by field research'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'The chapter notes leadership research began with traits (e.g., height, gender), abandoned that approach, and has revived it in situational form. It illustrates why historical awareness helps you see where a literature is headed.'
    },
    {
      q: 'Which pairing of I-O consulting’s role is accurate according to the chapter?',
      type: 'mcq',
      choices: [
        'Consulting firms exist only as large practices employing dozens of I-O psychologists',
        'Consulting firms serve organizations that cannot hire I-O psychologists full-time, and can surge into large corporations when a big project needs a lot of I-O talent at once',
        'Consulting is restricted by SIOP ethics rules to selection work only',
        'Consulting has declined sharply as corporations built internal I-O teams'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'The book describes large growth in I-O consulting, with firms ranging from dozens of psychologists to only a few individuals, serving smaller organizations that cannot support a permanent hire and surging into larger ones for major projects.'
    },
    {
      q: 'Which set correctly lists the five practice settings shown in Figure 1.3?',
      type: 'mcq',
      choices: [
        'Academic, Private Industry, Government, Military, Consulting',
        'Academic, Clinical, Government, Nonprofit, Consulting',
        'Research, Teaching, Practice, Policy, Advocacy',
        'Selection, Training, Appraisal, Motivation, Leadership'
      ],
      correct: 0,
      difficulty: 'E',
      explanation: 'Figure 1.3 shows Academic, Private Industry, Government, Military, and Consulting. Option D lists content areas, not settings.'
    },
    {
      q: 'A researcher measures employee turnover, health, and productivity continuously across thousands of workers using card swipes and system logs. Which "V" of big data is most directly illustrated by the fact that data are captured continuously rather than at one time point?',
      type: 'mcq',
      choices: ['Volume', 'Variety', 'Velocity', 'Veracity'],
      correct: 2,
      difficulty: 'H',
      explanation: 'Velocity refers to the frequency of the data rather than something measured at a single time point. Volume is quantity, variety is the range of data types, veracity is trustworthiness.'
    },
    {
      q: 'A company’s HR director claims their new hiring test is "scientifically supported" because it was described in HR Magazine. Based on Chapter 1, the best critique is that:',
      type: 'mcq',
      choices: [
        'HR Magazine only publishes European research, which does not generalize to the US',
        'Trade journals like HR Magazine are not peer-reviewed and are not necessarily committed to communicating scientifically validated findings',
        'HR Magazine is peer-reviewed but applies less rigorous standards than conference proceedings',
        'Practice-oriented journals cannot report empirical results at all'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'HR Magazine, People Management, HR Focus, and T+D are trade journals: they showcase company activities, industry trends, and new products, but tend not to be peer-reviewed and make no commitment to scientific validation. This scenario also tests the scientist-practitioner model’s demand that practice rest on strong research.'
    },
    {
      q: 'A graduate applicant has a 3.9 GPA and excellent GRE scores but no research experience. Based on the chapter’s advice, what is the most accurate assessment of their Ph.D. application?',
      type: 'mcq',
      choices: [
        'Research experience is optional; GPA and GRE alone are decisive',
        'Research experience is essential for most Ph.D. programs because it gives a "preview" of what the job of graduate student will be like',
        'Research experience matters only for master’s admissions',
        'Research experience can be substituted with a higher GRE quantitative score'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'The chapter calls undergraduate research experience essential for most graduate programs, especially the Ph.D., precisely because it previews the graduate student role. It also underwrites the strong, specific letters of reference that the chapter lists as a fourth criterion.'
    },
    {
      q: 'Which statement best captures how the chapter frames I-O psychology’s beneficiaries?',
      type: 'mcq',
      choices: [
        'The field exists primarily to raise organizational productivity; worker outcomes are incidental',
        'The field exists primarily to protect workers; organizational outcomes are secondary',
        'The field aims to benefit both the organization and the worker — placing the right person in the right job while improving job attitudes and health outcomes',
        'The field is officially neutral and takes no position on whose interests it serves'
      ],
      correct: 2,
      difficulty: 'E',
      explanation: 'The dual-benefit principle is stated explicitly: I-O psychologists help organizations place the right worker in the right position (raising productivity and retention) and work to improve employees’ work lives, including job attitudes and health outcomes.'
    }
  ]
};
