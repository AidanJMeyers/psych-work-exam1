import React from 'react';
import { Callout, Table, Card } from '../components/Visual.jsx';

const IMG = 'ch14_structure_culture_change';

export default [
  // ------------------------------------------------------------------ 1
  {
    id: 'org-design-history',
    title: 'Organization Design and Its Three Historical Perspectives',
    subtitle: 'Classical theory, Human Relations, and the situational paradigm',
    content: (
      <>
        <Callout kind="info" title="What organization design is">
          <p>
            <strong>Organization design</strong> refers to the <strong>structures of accountability
            and responsibility, HR practices, and business processes</strong> existing in an
            organization that the organization uses to <strong>implement its strategy</strong>
            {' '}(Greenwood &amp; Miller, 2010). Structure, systems, and processes are{' '}
            <strong>tools that exist to enable the organization to enact its strategy</strong>.
          </p>
          <p className="mt-2">
            Organizations exist because they have <strong>goals that cannot be achieved by a single
            person</strong>, so they must orchestrate the efforts of individuals.{' '}
            <strong>Organization theory</strong> is the study of organizational design.
          </p>
        </Callout>

        <Card title="The three perspectives, in order">
          <Table
            headers={['Perspective', 'Core assumption', 'What it emphasized']}
            rows={[
              ['Classical organization theory (early 1900s)', 'There is ONE BEST WAY to structure work, and it is the manager’s job to make organizations more efficient.', 'EFFICIENCY as the goal, achieved through HIERARCHY, STRUCTURE, and WRITTEN PROCESSES.'],
              ['Human Relations movement (from the 1920s Hawthorne studies)', 'Workers are able to SELF-MANAGE effectively and will FLOURISH if allowed to do so.', 'Social norms, motivation, and job satisfaction as influences over productivity. A HUMANISTIC outlook.'],
              ['Situational paradigm (today)', 'There is NO one best way of organizing.', 'Understanding the CONTEXT — environment, size, technology, strategy — and configuring a structure that meets the organization’s needs.']
            ]}
          />
          <p className="mt-2 text-sm">
            <strong>The point the chapter drives home:</strong> the first TWO both assumed a one best
            way. The chapter calls the Human Relations approach{' '}
            <strong>&ldquo;just as naïve&rdquo;</strong> as classical theory, because it assumed
            everyone can self-manage and did not account for workers who cannot.
          </p>
        </Card>

        <Callout kind="danger" title="The three classical figures">
          <Table
            headers={['Figure', 'What they argued']}
            rows={[
              ['Frederick Taylor (Principles of Scientific Management, 1914)', 'The MANAGER’S job was to monitor and collaborate with employees to ensure work was done in the expected manner; the EMPLOYEE’S duty was to perform using the methods and procedures DESIGNED BY THE ORGANIZATION.'],
              ['Henri Fayol (French mining engineer)', 'The manager’s job was to PLAN, ORGANIZE, COMMAND, COORDINATE, and CONTROL. He proposed 14 PRINCIPLES, including DISCIPLINE (everyone respects the rules), UNITY OF COMMAND (every employee reports to only ONE manager), and CENTRALIZATION (managers retain ultimate decision-making authority).'],
              ['Max Weber (German sociologist, original writings in German in the 1920s)', 'The ideal organizational form is a BUREAUCRACY — emphasizing rule-based decision-making and obeying and following the hierarchy. Weber saw it as HIGHLY RATIONAL and an IMPROVEMENT over the loosely designed organizations of his time.']
            ]}
          />
          <p className="mt-2">
            <strong>The exam trap on Weber:</strong> &ldquo;bureaucracy&rdquo; carries negative
            connotations today — overemphasis on rules, forms, and paperwork — but{' '}
            <strong>that is not how Weber meant it</strong>.
          </p>
        </Callout>

        <Callout kind="warn" title="Likert’s System 4 — the Human Relations prescription">
          <strong>System 4 design</strong> (Likert, 1967) consists of{' '}
          <strong>goal-setting, decision-making, leadership, and reward systems</strong> that would{' '}
          <strong>maximize trust</strong> between employees and management and facilitate{' '}
          <strong>two-way communication</strong>. Likert recommended ALL organizations adopt it —
          which is exactly the &ldquo;one best way&rdquo; problem again.
        </Callout>

        <Callout kind="danger" title="Organizations respond to uncertainty irrationally — a likely exam item">
          <p>
            Decision-makers are <strong>not always rational actors</strong> who know which structure
            will work, so it is <strong>not unusual for organizations to have the &ldquo;wrong&rdquo;
            structure</strong> for their goals.
          </p>
          <p className="mt-2">
            Research shows that when the environment is <strong>turbulent and uncertain</strong>,
            having a lot of rules, regulations, and centralized authority is{' '}
            <strong>NOT the most effective</strong> way of organizing. <strong>Ironically, that is
            exactly what organizations tend to do</strong> — they introduce MORE rules and hierarchy
            (Bourgeois et al., 1978). Why? <strong>Uncertainty is stressful to decision-makers</strong>,
            and they try to reduce it by creating rules and structure. Organizations are designed by{' '}
            <strong>imperfect human beings whose emotions, self-interests, and perceptual biases</strong>{' '}
            affect how they react to the environment.
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 2
  {
    id: 'structure-dimensions',
    title: 'The Four Dimensions of Organizational Structure',
    subtitle: 'Formalization, centralization, departmentalization, span of control',
    images: [
      {
        src: `${IMG}/14a_fig14-1_functional_departmentalization.png`,
        alt: 'Figure 14.1: an organizational chart with a CEO at the top and five function-based departments below — manufacturing, sales, marketing, human resources, and finance.',
        caption: 'Figure 14.1 — Sample organizational chart departmentalized by FUNCTION.'
      },
      {
        src: `${IMG}/14b_fig14-2_product_departmentalization.png`,
        alt: 'Figure 14.2: a partial organizational chart of P&G with a CEO above seven product-category sector business units including beauty, grooming, health care, and fabric and home care.',
        caption: 'Figure 14.2 — Partial chart of P&G: each sector business unit is a different PRODUCT category.'
      }
    ],
    content: (
      <>
        <Callout kind="info" title="The definition">
          <strong>Organizational structure</strong> refers to the choices the organization makes
          regarding <strong>who does what, who reports to whom, how employees are grouped
          together, and how groups relate to each other</strong>. It determines how information
          flows, how authority is distributed, and how responsibilities are assigned.
        </Callout>

        <Card title="Formalization">
          <p>
            <strong>Formalization</strong> is the degree to which the organization is characterized by{' '}
            <strong>rules and procedures</strong> and the extent to which{' '}
            <strong>deviations from rules are tolerated</strong>.
          </p>
          <p className="mt-2">
            Highly formalized organizations do <strong>not</strong> decide case by case. They try to{' '}
            <strong>predict situations and problems</strong> employees will encounter and present{' '}
            <strong>codified responses</strong> — they <strong>supplant personal discretion with
            rules and procedures</strong>. Expect thick operational manuals and employee handbooks,
            specific job descriptions, and an emphasis on written communication.
          </p>
          <Table
            headers={['Side', 'Effect']}
            rows={[
              ['Taken too far', 'Becomes OVERLY BUREAUCRATIC, preventing innovation and change.'],
              ['The counterintuitive upside', 'Formalization may actually CREATE FREEDOM for teams at lower levels, because it creates structures and REDUCES UNCERTAINTY, freeing individuals and teams to work within those boundaries (Hempel et al., 2012). The maintenance crew whose codes spell out what to fix and how can focus on getting the work done efficiently.'],
              ['When rules backfire', 'Employees follow the rule but not the SPIRIT of the rule — frequent password-change requirements may actually REDUCE information safety when the password ends up on a Post-it by the computer.']
            ]}
          />
          <p className="mt-2 text-sm">
            <strong>McDonald&rsquo;s is the textbook case:</strong> it sells the standardization of its
            burgers, so it relies heavily on formalization and centralization — an operations manual
            hundreds of pages long, training programs in <strong>28 languages</strong>, buns toasted
            for <strong>17 seconds</strong>, and <strong>1 packet of sanitizer for every 2.5
            gallons</strong> of water in the shake machine.
          </p>
        </Card>

        <Card title="Centralization">
          <p>
            <strong>Centralization</strong> is the degree to which <strong>decision-making
            authority is concentrated in the hands of a small number of decision-makers at higher
            levels</strong>.
          </p>
          <Table
            headers={['Centralized', 'Decentralized']}
            rows={[
              ['Power resides at high levels; little involvement of lower-level employees in strategic decision-making.', 'Decisions are made by individuals at ALL levels, and by people CLOSER TO THE PROBLEM.'],
              ['Lower-level employees are not expected to proactively notice problems or produce solutions.', 'Employees experience greater AUTONOMY, contributing to their sense of FAIRNESS and serving as a MOTIVATOR (Schminke et al., 2000).'],
              ['Key information that would facilitate decision-making is NOT necessarily shared downward — so the organization may be SLOW to notice opportunities and threats (Fredrickson, 1986).', 'Employees are trusted to communicate with their supervisors.']
            ]}
          />
          <p className="mt-2 text-sm">
            The illustration: an employee told to paint a storage-room wall notices the wall is
            failing from a slow water leak — and <strong>says nothing</strong>, because noticing
            problems is not their job.
          </p>
        </Card>

        <Card title="Departmentalization — four ways">
          <Table
            headers={['Type', 'How work is grouped', 'Example']}
            rows={[
              ['Functional departments', 'Combines employees working in the SAME FUNCTION — marketing, manufacturing, accounting. The typical form in SMALLER organizations.', 'Figure 14.1'],
              ['By customer', 'DIFFERENT departments for different CUSTOMER CATEGORIES — e.g., high-tech customers vs. retail customers.', 'JP Morgan Chase (hybrid of customer and function)'],
              ['By product', 'A SEPARATE department for each PRODUCT category.', 'P&G’s sector business units (Figure 14.2)'],
              ['By geography', 'Separate departments for separate REGIONS of the country or world.', 'Marriott: EMEA, Americas, Asia Pacific (hybrid with function)']
            ]}
          />
          <Table
            headers={['', 'Functional', 'Product / customer / geography']}
            rows={[
              ['Advantage', 'MORE EFFICIENT — no duplication of effort. All marketing expertise is collected in one place and employees learn from others in their own functional area.', 'QUICKER RESPONSE to the needs of the market, because marketing, sales, and operations expertise sit under each department.'],
              ['Disadvantage', 'SLOWER to respond to the needs of a particular customer or product — sales staff must pay equal attention to every product line.', 'DUPLICATION of effort, and departments may start COMPETING for resources and with each other.']
            ]}
          />
          <p className="mt-2">
            A survey of US businesses indicated <strong>functional departmentalization is no longer
            the norm</strong>, and businesses organizing around products or customer groups{' '}
            <strong>would soon exceed 50 percent</strong> (Day, 2006). Even so, organizations
            typically <strong>retain some functional areas</strong> — HR, IT, finance — as separate
            departments.
          </p>
        </Card>

        <Callout kind="warn" title="Span of control">
          <p>
            <strong>Span of control</strong> is the <strong>number of employees that report to a
            single manager</strong>. As it increases, a manager&rsquo;s ability to review work
            carefully, supervise closely, and answer questions frequently{' '}
            <strong>diminishes</strong>, because each additional employee taxes limited resources.
          </p>
          <Table
            headers={['Source', 'Ideal span']}
            rows={[
              ['Roman times', '10'],
              ['Napoleon', '5'],
              ['Henri Fayol', 'Between 5 and 15'],
              ['The chapter’s own answer', 'There is NO CONSENSUS. It depends on the MATURITY and COMPETENCE of employees and the COMPLEXITY of the job.']
            ]}
          />
          <p className="mt-2">
            A <strong>wider</strong> span can be effective when work is{' '}
            <strong>standardized, straightforward, routine, and not too complex</strong>. When
            employees need close supervision, the span should be <strong>narrow</strong> — and when
            the span is narrow, the manager&rsquo;s <strong>leadership style</strong> plays an
            important role in how employees work and react.
          </p>
          <p className="mt-2">
            <strong>The safety finding:</strong> research in a chemical company showed increases in
            span of control <strong>correlated with increased levels of unsafe behaviors and
            accidents</strong> (Hechanova-Alampay &amp; Beehr, 2001). For safety-sensitive jobs, the
            span must be decided carefully.
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 3
  {
    id: 'mechanistic-organic',
    title: 'Mechanistic vs. Organic Structures',
    subtitle: 'The two prototypes — and why they are a spectrum, not a dichotomy',
    content: (
      <>
        <Callout kind="info" title="Why the two prototypes exist">
          The four dimensions — formalization, centralization, departmentalization, span of control —
          are <strong>not really independent of each other</strong>. They <strong>tend to go
          together</strong>, producing two recognizable prototypes.
        </Callout>

        <Card title="Side by side">
          <Table
            headers={['', 'Mechanistic', 'Organic']}
            rows={[
              ['Formalization', 'HIGHLY formalized', 'More INFORMAL'],
              ['Centralization', 'CENTRALIZED', 'DECENTRALIZED'],
              ['Span of control', 'NARROW spans, TALL hierarchies', 'WIDE spans, FLAT hierarchies'],
              ['Departmentalization', 'Organized around FUNCTIONAL departments', 'By CUSTOMER, PRODUCT, or GEOGRAPHY'],
              ['Built for', 'Governance with rules and regulations. Strength is PREDICTABILITY — an advantage in producing goods and services at MINIMAL COST.', 'FLEXIBILITY and ADAPTABILITY. Sacrifices efficiency and predictability in favor of QUICK ACTION.'],
              ['Examples', 'McDonald’s, Walmart; government; highly regulated and safety-sensitive industries such as pharmaceuticals and healthcare.', 'Apple, 3M, Google — relatively more common in ENTREPRENEURIAL organizations, even when they are large.']
            ]}
          />
        </Card>

        <Callout kind="danger" title="What employees experience in each">
          <ul className="list-disc pl-5 space-y-0.5">
            <li>
              Employees are given <strong>greater leeway</strong> in organic structures and therefore
              perceive <strong>greater levels of empowerment</strong> (Dust et al., 2014).
            </li>
            <li>
              Employees perceive <strong>greater levels of fairness</strong> and display{' '}
              <strong>organizational citizenship behaviors more frequently</strong> in organic
              structures (Ambrose et al., 2013).
            </li>
            <li>
              This suggests organic structures may be <strong>more supportive of positive
              relationships</strong> between management and employees, and better relations among
              employees.
            </li>
          </ul>
        </Callout>

        <Callout kind="warn" title="Two cautions the chapter states explicitly">
          <p>
            <strong>1. Organic is NOT necessarily the ideal structure.</strong> The structure should
            be a <strong>good fit for the industry, the pace of change, the environment, and the
            strategy</strong>. Companies with a mechanistic structure struggle if their industry
            requires innovation and quick action — <strong>IBM in the 1980s</strong> is the example —
            whereas other companies struggle to fit their industry&rsquo;s regulations or safety
            requirements because they have <strong>too few procedures or too much decentralization</strong>.
          </p>
          <p className="mt-2">
            <strong>2. Do not assume organizations are purely one or the other.</strong> Mechanistic
            and organic are <strong>two ends of a SPECTRUM</strong>, and real organizations sit
            somewhere between. Even within the heavily regulated pharmaceutical industry, some firms
            are more agile, flexible, less centralized, and less formalized than others.
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 4
  {
    id: 'contemporary-structures',
    title: 'Three Contemporary Structures',
    subtitle: 'Matrix, lattice, and virtual organizations',
    images: [
      {
        src: `${IMG}/14c_fig14-5_matrix_structure.png`,
        alt: 'Figure 14.5: a matrix structure in an architecture firm, with functional managers across the top (design, production, business development, construction administration) and project leads down the side (hospital, kindergarten, office, city hall), each employee sitting at an intersection.',
        caption: 'Figure 14.5 — A matrix structure: each employee has one FUNCTIONAL supervisor and one PROJECT supervisor.'
      }
    ],
    content: (
      <>
        <Callout kind="danger" title="Matrix structure">
          <p>
            The <strong>matrix structure</strong> combines a <strong>functional</strong> structure
            with a <strong>project-based</strong> one. Each employee reports to a{' '}
            <strong>functional manager AND a project manager</strong> — so matrix structures involve{' '}
            <strong>dual reporting relationships</strong>.
          </p>
          <Table
            headers={['Point', 'Detail']}
            rows={[
              ['Where it started', 'The AEROSPACE industry, since adopted in healthcare, technology, and banking (Duncan, 1979).'],
              ['How common', 'Today these structures are the NORM, not the exception. A Gallup poll of US businesses: 84 PERCENT of employees worked in some form of matrix, with 49 PERCENT working in multiple teams some days and 18 PERCENT in multiple teams EVERY day (Bazigos & Harter, 2016).'],
              ['Primary advantage', 'The ability to RESPOND to the needs of a specific product or market. Employees can be pulled from different areas of expertise, and REASSIGNED when the project ends — an advantage over permanently creating product or customer departments.'],
              ['Secondary advantage', 'Facilitates COLLABORATION and COMMUNICATION across functions (Lee et al., 2014).'],
              ['The core problem', 'SERVING TWO BOSSES. Project and department managers must coordinate their expectations or the employee experiences ROLE CONFLICT, CONFUSION, and STRESS.'],
              ['Other challenges', 'Matrix structures may INCREASE COMPETITION among employees and create ROLE AMBIGUITY, so employees need SOCIAL SKILLS to overcome these problems (Sy & Côté, 2004).']
            ]}
          />
        </Callout>

        <Callout kind="warn" title="Lattice structure">
          <p>
            A <strong>lattice structure</strong> has <strong>no typical top-down traditional
            hierarchy</strong>. It is characterized by <strong>person-to-person communication</strong>{' '}
            and the <strong>absence of assigned authority</strong>. There are{' '}
            <strong>no assigned managers</strong>. Each employee is expected to{' '}
            <strong>initiate or join a project of their own choosing</strong>, and what makes someone
            a leader is their <strong>ability to persuade others to join their projects</strong> —
            not a title.
          </p>
          <Table
            headers={['Case', 'Detail']}
            rows={[
              ['W. L. Gore (Gore-tex, Elixir guitar strings, implantable medical devices)', 'The biggest company using the structure, with OVER 10,000 workers.'],
              ['How it scales — Dunbar’s number', 'Robin Dunbar (1993) proposed that the maximum size of a human collective where every person knows every other person and can maintain relationships is 150 — "Dunbar’s number." Gore limits facility size to 150 TO 200 employees and OPENS A NEW SITE once a plant or office grows past that.'],
              ['Valve (Half-Life, Steam)', 'Over 400 employees and NO MANAGERS. Teams are called "cabals," each defining its own roles and assigning tasks. Employees handle functions normally done by HR, including hiring, termination, and pay raises. The company believes that if a project does not attract employees, it is probably not worth doing.'],
              ['The requirement', 'Employees must use PERSONAL INITIATIVE, manage themselves, and keep each other accountable. Best used where INNOVATION is highly desired — and a poor fit for someone extrinsically motivated who expects guidance and direction.']
            ]}
          />
        </Callout>

        <Callout kind="info" title="Virtual organizations">
          <p>
            When organizations need skills, expertise, or technology residing in another company,
            they often merge or acquire — but mergers are <strong>permanent</strong>, requiring
            operations, processes, and culture to be streamlined. Instead, a company may establish a{' '}
            <strong>virtual organization</strong>: <strong>a company outside of a company that
            exists for a specific purpose and to take advantage of a market opportunity</strong>.
          </p>
          <p className="mt-2">
            <strong>The example:</strong> P&amp;G had the idea for a new way of wrapping food but no
            market presence in that segment, so it approached <strong>Clorox</strong>, maker of Glad
            plastic wraps. The joint venture produced <strong>Glad Press&rsquo;n Seal</strong>, and
            the <strong>parent companies retained their independence and continue to compete in
            other markets</strong>. (NASA and the Department of Defense did the same thing with the
            National Institute for Rocket Propulsion Systems.)
          </p>
          <Table
            headers={['Advantages', 'Challenges']}
            rows={[
              ['Increased FLEXIBILITY and the ability to take advantage of a market opportunity or focus on a particular goal.', 'The MAJOR challenge is establishing a NEW ORGANIZATIONAL IDENTITY, so employees see themselves as belonging to the NEW organization with allegiances to it rather than to the old ones. A clear description of goals is also important, or members experience a great deal of UNCERTAINTY (Heneman & Greenberger, 2002).']
            ]}
          />
        </Callout>

        <Callout kind="warn" title="The takeaway on structure">
          Structures are <strong>simply tools</strong> — ways of organizing work to help the
          organization reach its objectives, and very different structures can be successful. But
          structure <strong>does</strong> affect attitudes and behavior: employees react better to
          structures that communicate <strong>valuing employee judgment</strong>, so decentralized,
          flat structures have greater potential to make employees <strong>more satisfied and
          potentially more creative</strong>. And the <strong>fit between structure and job
          incumbent</strong> matters a great deal.
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 5
  {
    id: 'culture-vs-climate',
    title: 'Organizational Culture and Climate',
    subtitle: 'The definitions, and the three ways culture and climate still differ',
    content: (
      <>
        <Callout kind="danger" title="Organizational culture">
          <p>
            Think of culture as the <strong>organization&rsquo;s personality</strong>.{' '}
            <strong>Organizational culture</strong> is defined as{' '}
            <strong>shared, &ldquo;taken-for-granted&rdquo; assumptions</strong> that members of an
            organization have and which affect the way they <strong>act, think, and perceive their
            environment</strong> (Schein, 1996).
          </p>
          <p className="mt-2">
            It may be thought of as an <strong>INFORMAL CONTROL MECHANISM</strong> over individuals
            at work — culture <strong>gives behavior direction, and members hold each other
            accountable</strong> to follow the norms.
          </p>
          <p className="mt-2 text-sm">
            <strong>The Nordstrom story:</strong> a customer tries nine pairs of shoes but the store
            lacks her color/size. As she is leaving, a second associate finds the shoes at{' '}
            <strong>Macy&rsquo;s — a rival store</strong> — and has them shipped to her. She later
            overhears the second associate being <strong>frustrated with the first</strong> for not
            trying hard enough and for <strong>&ldquo;letting us down.&rdquo;</strong> No manager was
            involved; peers enforced the culture.
          </p>
        </Callout>

        <Card title="Culture vs. climate">
          <Table
            headers={['Term', 'Definition']}
            rows={[
              ['Organizational culture', 'Shared, "taken-for-granted" ASSUMPTIONS affecting how members act, think, and perceive.'],
              ['Organizational climate', 'SHARED PERCEPTIONS about a work unit’s POLICIES, PRACTICES, and what behaviors are REWARDED and EXPECTED (Schneider et al., 2013).'],
              ['Psychological climate', 'An INDIVIDUAL person’s perception of the behavioral patterns of an entity.']
            ]}
          />
          <p className="mt-2">
            <strong>Originally they were very different phenomena:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-0.5 mt-1">
            <li>
              <strong>Culture</strong> = the <strong>unobservable</strong> values and assumptions, so
              it could only be investigated through <strong>direct observation and experience</strong>{' '}
              — researchers spending <strong>about a year</strong> observing and living in an
              organization, acting like a <strong>cultural anthropologist</strong>.
            </li>
            <li>
              <strong>Climate</strong> = more <strong>temporary and observable</strong> behavioral
              tendencies, suited to <strong>surveys</strong>, with typologies allowing researchers to
              measure the <strong>level and strength</strong> of climate.
            </li>
          </ul>
          <p className="mt-2">
            <strong>Nowadays no such distinction seems to exist</strong>, and some scholars believe
            the similarities <strong>outweigh any theoretical differences</strong> (Denison, 1996;
            Glick, 1985).
          </p>
        </Card>

        <Callout kind="warn" title="The three exceptions that still hold">
          <ol className="list-decimal pl-5 space-y-1">
            <li>
              When referring to a <strong>work unit or team</strong> rather than the entire
              organization, you are more likely to come across the term group{' '}
              <strong>&ldquo;climate.&rdquo;</strong>
            </li>
            <li>
              <strong>Psychological climate</strong> is <strong>one person&rsquo;s</strong> perception,
              whereas organizational or team climate usually involves some measure of{' '}
              <strong>CONSENSUS</strong> among members. That consensus requirement is the whole
              difference.
            </li>
            <li>
              Climate research tends to focus on a <strong>SINGLE dimension</strong> — safety
              climate, customer service climate, empowerment climate, ethics climate, diversity
              climate, justice climate — while culture research uses{' '}
              <strong>typologies with multiple dimensions</strong>.
            </li>
          </ol>
          <p className="mt-2 text-sm">
            Because of culture&rsquo;s <strong>more permanent nature and pervasiveness</strong>, the
            chapter keeps its focus on culture rather than climate.
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 6
  {
    id: 'culture-dimensions-cvf',
    title: 'Dimensions of Culture: The Competing Values Framework',
    subtitle: 'Adhocracy, market, clan, hierarchy — plus subcultures and countercultures',
    images: [
      {
        src: `${IMG}/14d_fig14-6_competing_values_framework.png`,
        alt: 'Figure 14.6: a two-by-two grid of four culture types — clan, adhocracy, hierarchy, and market — each with bullet points describing its focus and characteristics.',
        caption: 'Figure 14.6 — Culture dimensions based on the Competing Values Framework (Quinn & Rohrbaugh, 1983).'
      }
    ],
    content: (
      <>
        <Card title="The four cultures — know the focus verb for each">
          <Table
            headers={['Culture', 'Focuses on', 'Characteristics', 'Values', 'Examples']}
            rows={[
              ['Adhocracy', 'CREATING', 'Entrepreneurial, flexible, risk-taker, creative', 'Puts INNOVATION FIRST. Values entrepreneurial action and encourages risk-taking — CELEBRATES attempts to try something new instead of punishing failures.', 'Google, 3M, Facebook'],
              ['Market', 'COMPETING', 'Aggressive, competitive, customer-oriented', 'Values BEING SUCCESSFUL in the market. The goal is MARKET SHARE and OUTPERFORMING the competition. Achievement and competition are key.', 'Apple, Salesforce.com, Netflix'],
              ['Clan', 'COLLABORATION', 'Cohesive, people-oriented, team player, empowering', 'Values EMPLOYEE SATISFACTION and COMMITMENT, with great emphasis on FAIRNESS, EMPOWERMENT, and PUTTING EMPLOYEES FIRST.', 'Costco, SAS Institute'],
              ['Hierarchy', 'CONTROLLING', 'Efficient, timely, consistent', 'Emphasizes EFFICIENCY and TIMELINESS, making things PREDICTABLE by instituting a lot of procedures and rules and then following them.', 'Boeing, Walmart']
            ]}
          />
        </Card>

        <Callout kind="danger" title="The framework’s claim does NOT hold up — a likely exam item">
          The Competing Values Framework <strong>PROPOSES that these dimensions are independent</strong>{' '}
          of each other, so an organization displaying the values of one dimension{' '}
          <strong>would not</strong> display the values of the others.{' '}
          <strong>Empirical research does not support this</strong> — there is{' '}
          <strong>significant overlap across dimensions</strong> (Hartnell et al., 2011).{' '}
          <strong>Google is the counterexample:</strong> known for innovation (adhocracy), but also
          competitive and caring about outperforming rivals (market), and also putting employees
          first (clan).
        </Callout>

        <Callout kind="warn" title="Subcultures and countercultures">
          <p>
            An organization may have <strong>more than one culture</strong>.{' '}
            <strong>Subcultures are common</strong>, with different departments and teams having
            different cultures — a software company may be innovative overall while its{' '}
            <strong>sales department</strong> embraces those values and is also{' '}
            <strong>highly aggressive and competitive</strong>.
          </p>
          <p className="mt-2">
            <strong>Countercultures</strong> are <strong>identifiable units within the organization
            that embrace values and assumptions that DIRECTLY CONTRADICT the overall
            organization&rsquo;s values</strong> (Martin &amp; Siehl, 1983). Even though they
            conflict, the organization may <strong>tolerate</strong> them because they are{' '}
            <strong>needed, powerful, or effective</strong>.
          </p>
          <p className="mt-2 text-sm">
            <strong>Ben &amp; Jerry&rsquo;s inside Unilever</strong> is the case: Unilever preserved
            its uniqueness, producing the situation where Unilever joined companies suing Vermont
            over mandatory GMO labeling <strong>while Ben &amp; Jerry&rsquo;s was a leading supporter
            of that same law</strong>. Observers attribute Unilever&rsquo;s increasing social
            responsibility to Ben &amp; Jerry&rsquo;s influence — suggesting{' '}
            <strong>countercultures may sometimes change the broader culture they reside in</strong>.
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 7
  {
    id: 'why-culture-matters',
    title: 'Why Culture Matters, and How to Measure It',
    subtitle: 'Performance effects, person–organization fit, and Schein’s three levels',
    images: [
      {
        src: `${IMG}/14e_fig14-7_levels_of_culture.png`,
        alt: 'Figure 14.7: three nested or stacked levels of organizational culture — artifacts at the most visible level, values in the middle, and assumptions as the least visible.',
        caption: 'Figure 14.7 — Levels of organizational culture: assumptions least visible, artifacts most directly observable.'
      }
    ],
    content: (
      <>
        <Callout kind="info" title="Culture matters for organizational performance">
          <p>
            Culture has been proposed as a <strong>source of competitive advantage</strong> because
            strong and healthy cultures are <strong>valuable, rare, and difficult to imitate</strong>{' '}
            (Barney, 1986).
          </p>
          <p className="mt-2">
            A meta-analysis found culture affected organizational effectiveness{' '}
            <strong>even after controlling for formal HR practices and leadership</strong>, with
            effects ordered from strongest to weakest (Hartnell et al., 2019):
          </p>
          <Table
            headers={['Rank', 'Outcome category', 'Examples']}
            rows={[
              ['STRONGEST', 'Employee outcomes', 'Employee attitudes'],
              ['2nd', 'Operational outcomes', 'Efficiency'],
              ['3rd', 'Customer outcomes', 'Customer satisfaction'],
              ['4th', 'Innovation outcomes', 'New and improved procedures'],
              ['WEAKEST', 'Financial results', 'Profitability']
            ]}
          />
          <p className="mt-2">
            Also: <strong>hierarchical cultures tend to IMITATE their competitors, whereas
            adhocracies try to be PIONEERS</strong> in their industries (Naranjo-Valencia et al.,
            2011). Culture is a <strong>remote but still important</strong> influence on the ability
            to compete.
          </p>
        </Callout>

        <Callout kind="danger" title="Culture matters for attitudes — but FIT matters more">
          <p>
            <strong>Clan culture</strong> had the <strong>strongest correlation with job satisfaction
            and organizational commitment</strong> (Hartnell et al., 2011) — when the organization
            puts people first and emphasizes collaboration and teamwork, employees are happier and
            more committed.
          </p>
          <p className="mt-2">
            But what really matters is <strong>person–organization fit</strong>: the{' '}
            <strong>fit between the person&rsquo;s values and the organizational culture&rsquo;s
            values</strong>. The same culture may be very attractive to some people and fall short
            for others — someone who prefers clear direction and working alone would be a poor fit at
            a company emphasizing empowerment and teamwork.
          </p>
          <Table
            headers={['O’Reilly et al. (1991) — the study to remember', 'Detail']}
            rows={[
              ['Who', 'New employees joining ACCOUNTING FIRMS.'],
              ['When', 'In their FIRST FEW DAYS at work.'],
              ['Instrument', 'The 50-ITEM Organizational Culture Profile. Newcomers ranked THEIR OWN values; managers used the SAME instrument to rank the ORGANIZATION’S values. A culture fit score was computed from the two.'],
              ['Result 1', 'Employees with higher fit early on had higher JOB SATISFACTION and ORGANIZATIONAL COMMITMENT scores A YEAR LATER.'],
              ['Result 2', 'They were more likely to STILL BE EMPLOYED in the same company TWO YEARS LATER.']
            ]}
          />
        </Callout>

        <Callout kind="warn" title="Culture signals what matters">
          In a study in educational settings by one of this book&rsquo;s own authors (Erdogan et al.,
          2006), the <strong>principal–teacher relationship was shaped by culture</strong>: in{' '}
          <strong>aggressive</strong> cultures, relationship quality was a function of{' '}
          <strong>how rewards were distributed</strong>, whereas in cultures emphasizing{' '}
          <strong>respect for people</strong>, it was a function of whether the employee was{' '}
          <strong>treated with dignity and respect</strong>.
        </Callout>

        <Card title="How to measure culture">
          <p>
            Getting the viewpoint of <strong>insiders</strong> helps — but what members{' '}
            <strong>say</strong> may not reflect reality. A manager may honestly say the company
            cares about its people while lower-level employees feel otherwise, and answers may{' '}
            <strong>put a positive spin</strong> on the culture, reflecting the reality people{' '}
            <strong>wish</strong> they lived in rather than the one that exists.
          </p>
          <p className="mt-2">Established surveys:</p>
          <ul className="list-disc pl-5 space-y-0.5 mt-1">
            <li><strong>Organizational Culture Inventory</strong> (Human Synergistics International)</li>
            <li><strong>Denison Organizational Culture Survey</strong> (Denison Consulting)</li>
            <li>
              <strong>Organizational Culture Assessment Instrument</strong> — based on the{' '}
              <strong>Competing Values Framework</strong> (OCAI online)
            </li>
          </ul>
        </Card>

        <Callout kind="danger" title="Schein’s three levels — most to least visible">
          <Table
            headers={['Level', 'Definition', 'The 300-page handbook example']}
            rows={[
              ['Artifacts (MOST visible)', 'The most visible elements — anything you can DIRECTLY OBSERVE: dress code, office design, building architecture, employee handbooks, rules and regulations, even stories told about organizational history.', 'The 300-page employee handbook itself.'],
              ['Values', 'STANDARDS OF BEHAVIOR or PRINCIPLES about what is important.', 'Inflexible, consistent, stable.'],
              ['Assumptions (LEAST visible)', '"TAKEN-FOR-GRANTED" beliefs about HUMAN NATURE.', '"Employees need to be told down to the greatest detail how to act," and "without rules, you have chaos."']
            ]}
          />
          <p className="mt-2 text-sm">
            <strong>The catch with artifacts:</strong> they are challenging to interpret because they
            may have <strong>multiple meanings</strong>. Does a shared desk signify a relaxed,
            collaborative atmosphere — or an office full of distractions, as the headphones suggest?
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 8
  {
    id: 'culture-creation',
    title: 'Where Culture Comes From — Six Influences',
    subtitle: 'Founder values, history, ASA, onboarding, leadership, and rewards',
    images: [
      {
        src: `${IMG}/14f_fig14-8_attraction_selection_attrition.png`,
        alt: 'Figure 14.8: three sequential panels — attraction, selection, and attrition — each describing how employees and organizations converge on shared values.',
        caption: 'Figure 14.8 — The Attraction-Selection-Attrition (ASA) process.'
      }
    ],
    content: (
      <>
        <Card title="The six forces (Figure 14.9)">
          <Table
            headers={['Influence', 'How it works', 'Example']}
            rows={[
              ['Founder’s values', 'Entrepreneurs have assumptions about how the world works, what motivates people, and how business should be structured. Their CHOICES, FIRST HIRES, DECISION STYLE, and what they REWARD and PUNISH embed their values.', 'Jeff Bezos (Amazon), Jamsetji Tata (Tata Group), Henry Nestlé (Nestlé), Tony Hsieh (Zappos)'],
              ['History', 'Culture develops as the organization COPES WITH ITS ENVIRONMENT. Whatever elements are regarded as having helped it SURVIVE are the values retained and passed to future generations.', '—'],
              ['Attraction-Selection-Attrition (ASA)', 'Culture PROTECTS AND SUSTAINS ITSELF (Schneider et al., 1995). See the breakdown below.', 'IDEO — the interview process involves a BRAINSTORMING SESSION'],
              ['Newcomer onboarding', 'New employees are taught not only how to perform their jobs but also the fundamental assumptions, values, and behavioral practices of the organization — through orientation programs, a formal mentor or a mentoring relationship with a senior colleague, or direct experience.', 'Twitter’s "Yes to Desk" program: 75 TOUCHPOINTS from accepting the offer to arriving at the desk'],
              ['Leadership style', 'Managers SET THE TONE through day-to-day actions. The behaviors they ENCOURAGE, MODEL, and PUNISH determine the culture.', 'Maurice Hilleman at Merck — working seven days a week, not tolerating poor performance, and protecting employees from layoffs and upper-management interference, creating high performance orientation AND fierce loyalty'],
              ['Reward systems', 'Rewards tell people what REALLY matters. Employees notice who is rewarded, recognized, and promoted.', 'No amount of work–life-balance talk survives promoting the people who forgo vacations and weekends']
            ]}
          />
        </Card>

        <Callout kind="danger" title="ASA, step by step">
          <Table
            headers={['Step', 'What happens', 'At IDEO']}
            rows={[
              ['Attraction', 'Employees are ATTRACTED to organizations that share their values.', 'If you are creative and a risk-taker, you are more likely to WANT to work there.'],
              ['Selection', 'Companies are more likely to SELECT people who share their values.', 'Innovative people who do not hold back their ideas find it easier to be HIRED, because the interview involves a brainstorming session to see you in action.'],
              ['Attrition', 'People who do not fit in tend to LEAVE. Those who fit are more likely to stay.', 'If you are not innovative, outspoken, or open-minded but got hired anyway, your tenure will be SHORT — you will either voluntarily leave or be encouraged to leave.']
            ]}
          />
          <p className="mt-2">
            <strong>The net effect:</strong> culture <strong>ends up protecting and preserving
            itself</strong>, because people who do not fit will not want to work there, will not be
            hired, or will leave even when hired — <strong>leaving behind like-minded individuals
            who buy into the culture&rsquo;s most important values</strong>.
          </p>
        </Callout>

        <Callout kind="warn" title="Two findings worth memorizing">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              A <strong>founder&rsquo;s influence may remain visible decades later — PROVIDED THE
              COMPANY IS SUCCESSFUL</strong>. Survival and success reinforce the belief that the
              founder&rsquo;s values are the right ones to have.
            </li>
            <li>
              <strong>Leaders influence organizational performance INDIRECTLY, through the culture
              they help develop</strong> (Ogbonna &amp; Harris, 2000). In a study of{' '}
              <strong>over 1,000 managers</strong> in the Australian private sector, Sarros et al.
              (2008) showed that when managers <strong>articulated a strong vision, provided
              individual support, and communicated high performance</strong>, it helped shape the
              culture and aided a <strong>climate supporting innovativeness</strong>. And culture may
              even serve as a <strong>SUBSTITUTE for CEO leadership</strong> — for example when the
              CEO does not display relationship-focused behaviors but the culture is
              relationship-focused (Hartnell et al., 2016).
            </li>
          </ul>
          <p className="mt-2 text-sm">
            One more nuance on rewards: the <strong>FORMAL</strong> reward system shapes culture by
            telling people what matters, but the <strong>INFORMAL</strong> reward system — what
            managers actually do and what they encourage others to do — <strong>sends a clear
            message as well</strong>.
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 9
  {
    id: 'od-and-resistance',
    title: 'Organizational Change: OD Interventions and Resistance',
    subtitle: 'The three intervention classes, and the five reasons people resist',
    images: [
      {
        src: `${IMG}/14g_fig14-10_od_interventions.png`,
        alt: 'Figure 14.10: three grouped columns of OD interventions — human process approaches (team building, survey feedback, appreciative inquiry), technostructural approaches (job enrichment, re-engineering, total quality management), and strategic change approaches (changing structure, culture, strategy).',
        caption: 'Figure 14.10 — Summary of OD interventions, in three classes.'
      }
    ],
    content: (
      <>
        <Callout kind="danger" title="The chapter’s central claim about change">
          <p>
            In the news media, change is portrayed as <strong>revolutionary</strong> rather than
            incremental, and <strong>directly attributable to specific individuals</strong> — a new
            CEO, or a few heroic figures with the one bright idea.
          </p>
          <p className="mt-2">
            The I-O literature finds something different: the success of a change effort is{' '}
            <strong>ultimately the result of how CHANGE RECIPIENTS — the employees affected by the
            change — receive it</strong> (Bartunek et al., 2006). Successful change therefore
            requires a clear understanding of <strong>how and why employees resist</strong>, and
            designing the change effort to account for that resistance.
          </p>
          <p className="mt-2">
            <strong>Organization Development (OD)</strong> is a field of study that applies{' '}
            <strong>behavioral science principles</strong> to enact change — theories, techniques,
            and systems that help plan organizational change by changing individuals&rsquo;{' '}
            <strong>on-the-job behavior</strong> (Porras &amp; Robertson, 1992).
          </p>
        </Callout>

        <Card title="The three classes of OD intervention">
          <Table
            headers={['Class', 'What it changes', 'Interventions']}
            rows={[
              ['Human process approaches', 'HUMAN PROCESSES and EMPLOYEE SATISFACTION, to increase individual and organizational functioning. ASSUMES organizational effectiveness stems from INDIVIDUAL FULFILLMENT.', 'Team building · Survey feedback · Appreciative inquiry'],
              ['Technostructural approaches', 'The TECHNOLOGY or STRUCTURE of the organization, to increase its effectiveness.', 'Job enrichment · Re-engineering · Total Quality Management'],
              ['Strategic change approaches', 'LARGE-SCALE: the strategy, organizational design, or culture. Aims for greater ALIGNMENT between culture, structure, strategy, and environment. Usually initiated at the TOP levels.', 'Changing structure · Changing organizational culture · Changing strategy']
            ]}
          />
        </Card>

        <Callout kind="info" title="The six specific interventions">
          <Table
            headers={['Intervention', 'What it involves']}
            rows={[
              ['Team building (human process)', 'CLARIFYING the goals and objectives of the group and the roles and responsibilities of members, EXPLAINING and REDESIGNING how work actually gets done, and IMPROVING the quality of relations among members to increase COHESIVENESS. May involve restructuring tasks so they align and examining roles to ensure they complement each other.'],
              ['Survey feedback (human process)', 'SYSTEMATIC GATHERING of information from employees to identify potential problem areas, STIMULATING CONVERSATION around those areas, and establishing MOTIVATION TO CHANGE. A key part is compiling results FOR EACH TEAM and feeding them back to that team.'],
              ['Appreciative inquiry (human process)', 'A different and relatively NEW approach. Unlike other interventions that focus on problems, challenges, and "fixing" the organization, it IDENTIFIES THE UNIQUE STRENGTHS AND BEST ASPECTS of the organization and then generates ideas about how to BUILD ON THEM.'],
              ['Job enrichment (technostructural)', 'Changing the CONTENT of jobs to increase their MOTIVATING POTENTIAL — increasing the VARIETY of tasks and giving employees more CONTROL. The example: instead of each worker performing one simple task on a production line, groups of workers are responsible for manufacturing an ENTIRE CAR.'],
              ['Re-engineering (technostructural)', 'RE-ENVISIONING the structure to increase coordination and efficiency. A RADICAL REDESIGN of how work is done — eliminating unnecessary functions and, instead of improving processes incrementally, recommending STARTING OVER. Therefore it attracts a HIGH LEVEL OF RESISTANCE.'],
              ['Total Quality Management (technostructural)', 'CONTINUOUS and INCREMENTAL improvement in the quality of work and processes. Unlike re-engineering, its incremental nature and continuous questioning of the status quo is a BETTER FIT for employees’ natural tendency to resist change.']
            ]}
          />
        </Callout>

        <Callout kind="danger" title="Resistance to change has three components">
          <Table
            headers={['Component', 'What it is', 'Example']}
            rows={[
              ['Cognitive', 'THOUGHTS and BELIEFS about the change.', '"The proposed change is poorly planned; it will make us less efficient."'],
              ['Affective', 'FEELINGS and EMOTIONS generated by the change.', '"I hate the new method! I am so disappointed that this is what they came up with."'],
              ['Behavioral', 'BEHAVIORAL REACTIONS to the change.', 'Refusing to use the new method; talking negatively about it to colleagues.']
            ]}
          />
          <p className="mt-2 text-sm">
            Piderit (2000) — and note this is <strong>the same three-component structure as job
            attitudes</strong> from Chapter 11.
          </p>
        </Callout>

        <Card title="The five reasons people resist">
          <Table
            headers={['Factor', 'What the research says']}
            rows={[
              ['Habits', 'Habits let us run on "auto-pilot." CHANGE FORCES ACTIVE THINKING — like finding your regular route under construction. Until new habits develop, you keep performing the OLD way. This is why even a minor software upgrade is angst-inducing: moved buttons mean extra effort and thinking in a task that should have been automatic.'],
              ['Personality', 'Individuals with high INTERNAL LOCUS OF CONTROL, high SELF-EFFICACY, and high POSITIVE AFFECTIVITY are LESS resistant (Oreg et al., 2011) — possibly because they believe they can COPE with it more effectively.'],
              ['Trust in the organization and management', 'Those more COMMITTED, who TRUST management, and who feel the organization SUPPORTS them are less likely to resist. BUT the findings on commitment are CONTRADICTORY — committed employees are more open to change that benefits the organization, yet may resist harder when the factors causing their commitment are at risk. Someone committed because they admire management may have LOW resistance to technology change and VERY HIGH resistance to a change in management.'],
              ['Personal impact of change', 'GREATER resistance when change brings higher JOB INSECURITY, loss of STATUS AND POWER, loss of INCOME, or longer HOURS. LESS resistance when it increases AUTONOMY, MEANINGFULNESS, work–life BALANCE, or POWER AND STATUS. STATUS LOSS is particularly damaging to HIGH-STATUS people (Marr & Thau, 2014).'],
              ['Features of change implementation', 'Perceived FAIRNESS matters. So does HOW it was communicated — whether people were treated with dignity and respect and received a clear, constructive explanation. BUT sometimes MORE communication INCREASES resistance by making employees aware of MORE THINGS TO RESIST. Employee INVOLVEMENT and PARTICIPATION is related to LOWER resistance, because it produces change that actually meets employee needs, makes employees aware of why tradeoffs were made, and increases FELT CONTROL.']
            ]}
          />
          <p className="mt-2 text-sm">
            The chapter&rsquo;s own illustration of personal impact: when Covid-19 forced academics
            online, resistance was shaped by individual circumstances — varying technological savvy,
            lecture courses converting more easily than chemistry or biology lab courses, and faculty
            with childcare responsibilities facing a heavier burden.
          </p>
        </Card>
      </>
    )
  },

  // ------------------------------------------------------------------ 10
  {
    id: 'change-models-legal-global-ch14',
    title: 'Change Models, and Legal / Global / Current Issues',
    subtitle: 'Lewin’s three stages, Kotter’s eight steps, and the value of misfit',
    images: [
      {
        src: `${IMG}/14h_fig14-11_lewin_three_stage.png`,
        alt: 'Figure 14.11: three sequential panels labeled unfreeze, change, and refreeze, each listing what the organization does in that stage.',
        caption: 'Figure 14.11 — Lewin’s three-stage model of change.'
      },
      {
        src: `${IMG}/14i_fig14-12_kotter_eight_step.png`,
        alt: 'Figure 14.12: eight numbered steps of planned change in sequence, from establishing a sense of urgency through anchoring changes in corporate culture.',
        caption: 'Figure 14.12 — Kotter’s eight-step model of planned change.'
      }
    ],
    content: (
      <>
        <Callout kind="danger" title="Lewin’s three-stage model (1951)">
          <Table
            headers={['Stage', 'Definition', 'What the organization does']}
            rows={[
              ['Unfreezing', 'The stage in which those involved need to UNDERSTAND THE NECESSITY for change and be MOTIVATED to change.', 'Assumptions are QUESTIONED; people become aware of the CONSEQUENCES OF NOT CHANGING; a compelling reason and a SENSE OF URGENCY are given (e.g., the financial situation relative to competitors). Also PREPARE individuals — answer questions, provide training, and INVOLVE those affected in designing the change. COMMUNICATION IS KEY: employees should know what will happen, when, why, and how they will be affected.'],
              ['Change', 'The SECOND stage — the ACTUAL IMPLEMENTATION stage.', 'The new technology, structure, or strategy is implemented. Success often relies on REMOVING ROADBLOCKS and providing SUPPORT, HELP, and MENTORING.'],
              ['Refreezing', 'The FINAL stage, where the new ways of working or organizing are made PERMANENT.', 'Change is embraced as the new way to do things, with REINFORCEMENT for those who display the correct behaviors and INTERVENTIONS for those who have not yet made the change. Without refreezing, individuals REVERT BACK to old habits.']
            ]}
          />
          <p className="mt-2">
            <strong>Its strength and its weakness are the same thing:</strong> the model is helpful
            because it points out the organization must take steps <strong>both BEFORE and AFTER</strong>{' '}
            the actual change — but its <strong>simplicity</strong> also means it{' '}
            <strong>may not be detailed enough</strong> to represent the realities of change. Which
            is why more detailed models were developed.
          </p>
        </Callout>

        <Card title="Kotter’s eight-step model (1995)">
          <Table
            headers={['#', 'Step', 'Why it matters']}
            rows={[
              ['1', 'Establish a sense of urgency', 'Successful change usually comes from a sense that NOT changing will cause problems or failure. People resist unless there is a strong reason. A CRISIS may be an EXCELLENT way to justify change and a good opportunity to enact change that would be RESISTED AT OTHER TIMES.'],
              ['2', 'Form a coalition', 'There is POWER IN NUMBERS. Change agents succeed more often if they build a coalition of people ENTHUSIASTIC about change — ideally HIGH-LEVEL individuals and OPINION LEADERS.'],
              ['3', 'Create a vision', 'What is the ultimate goal? With a vision, structural, technological, or procedural changes are perceived as more MEANINGFUL and NECESSARY, which provides inspiration and motivation.'],
              ['4', 'Communicate the vision', 'Having a vision is not enough. Often change IS tied to a vision, but the vision is not communicated COMPELLINGLY to all parties, resulting in a lack of excitement or energy.'],
              ['5', 'Remove obstacles', 'Identifying and removing them is essential — this could involve removing stubborn employees who SABOTAGE the effort for political reasons, or ensuring employees are PREPARED and READY for the new ways.'],
              ['6', 'Create small wins', 'SUCCESS BREEDS SUCCESS. Otherwise employees take a "WAIT AND SEE" approach, deciding to wait until the policy goes away. Test the change on a SMALL SCALE (a pilot in one department), see if it works, PUBLICIZE the success, and use it as leverage elsewhere.'],
              ['7', 'Don’t quit prematurely', 'Declaring victory TOO EARLY makes excitement WANE. Once early success is achieved, reinforce it with MORE changes along the same lines and keep bringing in ADDITIONAL CHANGE AGENTS.'],
              ['8', 'Anchor changes in corporate culture', 'Change must be INSTITUTIONALIZED to remain permanent. If it becomes identified as ONE PERSON’S personal initiative, it becomes DEPENDENT on that person and possibly rejected by others. Long-lasting change becomes "this is how we do things around here."']
            ]}
          />
          <p className="mt-2 text-sm">
            <strong>Equifax is the chapter&rsquo;s urgency case:</strong> it handles financial
            information on over <strong>800 million</strong> consumers; in 2017 it admitted hackers
            may have accessed information about <strong>143 million</strong>; it settled with the FTC
            for <strong>$425 million</strong> and spent <strong>over $1 billion</strong> recovering.
            The CEO and Chief Information Security Officer were replaced, and the new CISO set out to
            transform the culture to value information security — tying employee bonuses to
            companywide security metrics and empowering employees to improve cybersecurity.
          </p>
        </Card>

        <Callout kind="warn" title="Legal issues">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              In <strong>highly centralized, hierarchical</strong> organizations, power dynamics
              between employees and managers are <strong>uneven</strong>, so the organization must
              take <strong>additional steps</strong> to protect employee rights and ensure
              discrimination or harassment is not occurring — and that employees feel comfortable
              reporting it. As formal power declines and employees are physically and psychologically
              removed from higher levels, reporting becomes difficult, contributing to an environment
              that is <strong>not psychologically safe</strong> and increasing legal liability.
            </li>
            <li>
              <strong>Restructuring is a time of critical legal exposure.</strong> Employees may be
              transferred, demoted, or laid off, and if such changes{' '}
              <strong>disproportionately affect one legally protected group</strong>, the organization
              may face legal problems. The chapter&rsquo;s example: laying off &ldquo;poorly
              performing&rdquo; employees who all turn out to be <strong>women over 50</strong> — the
              organization would need to demonstrate the decision rested on a{' '}
              <strong>sound and objective performance appraisal system</strong>.
            </li>
            <li>
              When an organization is in legal trouble over discriminatory, unethical, or unsafe
              behavior, <strong>its culture is often implicated</strong> — GM&rsquo;s defect cover-up
              traced to a culture of cover-up and secrecy valuing face-saving and financial savings
              over customer safety, and the 2010 BP Gulf of Mexico explosion (11 deaths, the largest
              ever accidental marine oil spill) implicated the <strong>absence of a safety
              culture</strong>. <strong>Simply instituting rules or procedures is not sufficient</strong>;
              the informal culture must change too.
            </li>
          </ul>
        </Callout>

        <Callout kind="info" title="Global implications">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              An organization&rsquo;s structure <strong>often reflects the national culture</strong>,
              which affects how high-level decision-makers interpret their environment — as an{' '}
              <strong>opportunity versus a risk</strong>.
            </li>
            <li>
              Research in <strong>over 200 manufacturing plants in nine countries</strong> showed the
              relationship between <strong>organic structures and continuous learning and
              improvement depended on whether the national culture endorsed participative
              management</strong>. In <strong>power-distant</strong> cultures, organic structures are{' '}
              <strong>harder to implement</strong> and may not yield the results they would in a more
              egalitarian culture (Huang et al., 2011).
            </li>
            <li>
              In a study of <strong>17 countries</strong>, in cultures with{' '}
              <strong>high levels of uncertainty</strong>, high levels of{' '}
              <strong>formalization produced MORE POSITIVE outcomes</strong> — probably because rules
              and procedures helped individuals cope with uncertainty (Fischer et al., 2019).
            </li>
            <li>
              National culture and organizational culture are <strong>related but not the same
              thing</strong>, and only a <strong>SMALL portion</strong> of the variation in
              organizational culture seems to come from national culture (Gerhart, 2009).
            </li>
            <li>
              Some scholars contend <strong>OD as a field is CULTURALLY BOUND</strong>, resting on
              assumptions like belief in the inherently good nature of human beings, valuing
              diversity, willingness to take risks, and valuing collaboration — values that are{' '}
              <strong>not universal</strong>, which can be a barrier to implementation.
            </li>
          </ul>
        </Callout>

        <Callout kind="danger" title="Current issues — the value of misfit, and co-CEOs">
          <p>
            <strong>The value of misfit.</strong> Hiring those who fit the culture is uncontroversial —
            but <strong>hiring for fit PERPETUATES a culture and will not help CHANGE it</strong>.
            Culture fit is <strong>less straightforward to assess</strong> than fit with the job and
            may be affected by <strong>outward appearance and job-irrelevant characteristics</strong>.
            The chapter&rsquo;s blunt example: a small entrepreneurial company where the average age
            is 27 and 80 percent of employees are male refuses a 50-year-old female applicant from a
            hierarchical, formal organization and calls it &ldquo;culture fit&rdquo; — which{' '}
            <strong>may simply be a code word for &ldquo;you are too different from us.&rdquo;</strong>{' '}
            So fit has advantages such as <strong>higher retention</strong> but downsides such as{' '}
            <strong>reduced innovativeness and diversity</strong>.
          </p>
          <p className="mt-2">
            <strong>Co-CEOs and new structures.</strong> Organizations are experimenting with virtual,
            lattice, and matrix forms, and some — particularly the lattice — remain{' '}
            <strong>controversial</strong>. Even though reading about them may suggest the lattice is
            replacing traditional hierarchy, the chapter states plainly that{' '}
            <strong>we do NOT have systematic evidence that such structures are better</strong>, that
            they produce better corporate performance or individual well-being, or that they are here
            to stay. Some organizations are trying <strong>multiple bosses at the very top</strong> —
            the UK financial services firm Argentex and the Swiss watch maker Oris are led by{' '}
            <strong>co-CEOs</strong>. We should <strong>not yet conclude that a strong organizational
            hierarchy is obsolete</strong>.
          </p>
        </Callout>
      </>
    )
  }
];
