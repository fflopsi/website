import getMetadata from '@/components/metadata';
import Link from 'next/link';

const title = 'Florian: Informatik TA';

export const metadata = getMetadata(
  title,
  "Florian's TA material for Informatik",
);

export default function Informatik() {
  return (
    <>
      <h2>Updates</h2>
      <ul>
        <li>
          <em>[17.12.2024]</em>
          <ul>
            <li>
              Uploaded <Link href='#quiz'>quiz slides</Link> from the last
              exercise session, thanks for participating!
            </li>
            <li>
              This was probably the last big update on here; thanks for the
              ride, <em>merry Christmas</em> and happy holidays!
            </li>
          </ul>
        </li>
        <li>
          <em>[29.10.2024]</em>
          <ul>
            <li>
              Added separate slide and handout{' '}
              <Link href='#material'>PDFs</Link> for each exercise session
            </li>
          </ul>
        </li>
        <li>
          <em>[22.10.2024]</em>
          <ul>
            <li>
              Added <Link href='#links'>C++ style guide</Link>
            </li>
          </ul>
        </li>
        <li>
          <em>[25.09.2024]</em>
          <ul>
            <li>
              Added <Link href='#links'>useful links</Link>
            </li>
          </ul>
        </li>
        <li>
          <em>[21.09.2024] Welcome!</em>
          <ul>
            <li>My website is up and running!</li>
          </ul>
        </li>
      </ul>

      <h2 id='material'>Exercise material</h2>
      <ul>
        <li>
          [ES01] <Link href='slides-01.pdf'>Organizational slides</Link> |{' '}
          <Link href='slides-01-modulo.pdf'>Modulo introduction</Link> |{' '}
          <Link
            target='_blank'
            href='https://lec.inf.ethz.ch/ifmp/2024/downloads/additional/Tables.pdf'
          >
            Binary representation
          </Link>
        </li>
        <li>
          [ES02]{' '}
          <Link
            target='_blank'
            href='https://lec.inf.ethz.ch/ifmp/2024/downloads/additional/for_loop.pdf'
          >
            <span className='cpp-code'>for</span> loop
          </Link>
        </li>
        <li>
          [ES03] <Link href='slides-03.pdf'>Slides</Link> |{' '}
          <Link href='handout-03.pdf'>Handout</Link> (slide summary)
        </li>
        <li>
          [ES04] <Link href='slides-04.pdf'>Slides</Link> |{' '}
          <Link href='handout-04.pdf'>Handout</Link> |{' '}
          <Link
            target='_blank'
            href='https://lec.inf.ethz.ch/ifmp/2024/downloads/additional/Floating_Point_Guidelines.pdf'
          >
            Floating point guidelines
          </Link>{' '}
          |{' '}
          <Link
            target='_blank'
            href='https://lec.inf.ethz.ch/ifmp/2024/downloads/additional/Comparing_FP.pdf'
          >
            Comparing floating point numbers
          </Link>
        </li>
        <li>
          [ES05] <Link href='slides-05.pdf'>Slides</Link> |{' '}
          <Link href='handout-05.pdf'>Handout</Link> |{' '}
          <Link
            target='_blank'
            href='https://lec.inf.ethz.ch/ifmp/2024/downloads/additional/function_exercises1.pdf'
          >
            Function Exercises I
          </Link>{' '}
          |{' '}
          <Link
            target='_blank'
            href='https://lec.inf.ethz.ch/ifmp/2024/downloads/additional/function_exercises2.pdf'
          >
            Function Exercises II
          </Link>
        </li>
        <li>
          [ES06] <Link href='slides-06.pdf'>Slides</Link> |{' '}
          <Link href='handout-06.pdf'>Handout</Link> |{' '}
          <Link
            target='_blank'
            href='https://lec.inf.ethz.ch/ifmp/2024/downloads/additional/references_exercise.pdf'
          >
            References Exercise
          </Link>
        </li>
        <li>
          [ES07] <Link href='slides-07.pdf'>Slides</Link> |{' '}
          <Link href='handout-07.pdf'>Handout</Link>
        </li>
        <li>
          [ES08] <Link href='slides-08.pdf'>Slides</Link> |{' '}
          <Link href='handout-08.pdf'>Handout</Link> |{' '}
          <Link
            target='_blank'
            href='https://lec.inf.ethz.ch/ifmp/2024/downloads/additional/TowersOfHanoi.eng.pdf'
          >
            Towers of Hanoi
          </Link>{' '}
          (difficult)
        </li>
        <li>
          [ES09] <Link href='slides-09.pdf'>Slides</Link> |{' '}
          <Link href='handout-09.pdf'>Handout</Link>
        </li>
        <li>
          [ES10] <Link href='slides-10.pdf'>Slides</Link> |{' '}
          <Link href='handout-10.pdf'>Handout</Link> |{' '}
          <Link
            target='_blank'
            href='https://lec.inf.ethz.ch/ifmp/2024/downloads/additional/MergeSort.pdf'
          >
            Merge-Sort
          </Link>
        </li>
        <li>
          [ES11] <Link href='slides-11.pdf'>Slides</Link> |{' '}
          <Link href='handout-11.pdf'>Handout</Link>
        </li>
        <li>
          [ES12] <Link href='slides-12.pdf'>Slides</Link> |{' '}
          <Link href='handout-12.pdf'>Handout</Link> |{' '}
          <Link
            target='_blank'
            href='https://lec.inf.ethz.ch/ifmp/2024/downloads/additional/Pointers_On_Arrays.pdf'
          >
            Pointers on arrays
          </Link>{' '}
          |{' '}
          <Link
            target='_blank'
            href='https://lec.inf.ethz.ch/ifmp/2024/downloads/additional/Reverse_Copy.pdf'
          >
            Reverse copy
          </Link>
        </li>
      </ul>

      <h2 id='quiz'>Quiz from last exercise</h2>
      <ul>
        <li>
          <Link
            target='_blank'
            href='https://www.mentimeter.com/app/presentation/alrgs6u1swpqyfyqw2xetnmjhbdtsajg'
          >
            Mentimeter quiz slides
          </Link>
        </li>
      </ul>

      <h2>Other stuff</h2>
      <ul>
        <li>
          [My cheatsheet] <Link href='CheatSheet.pdf'>PDF</Link> |{' '}
          <Link href='CheatSheet.tex'>LaTeX source</Link>
        </li>
      </ul>

      <h2 id='links'>Useful links</h2>
      <ul>
        <li>
          <Link target='_blank' href='https://lec.inf.ethz.ch/ifmp/2024/'>
            Course page
          </Link>{' '}
          with all the material that you can't find on here
        </li>
        <li>
          <Link
            target='_blank'
            href='https://lec.inf.ethz.ch/ifmp/2024/guides/style/intro.html'
          >
            C++ style guide
          </Link>{' '}
          for beautiful code
        </li>
        <li>
          <Link
            target='_blank'
            href='https://et.lecturers.inf.ethz.ch/subscriber/course/pWLMhQEDPZX2NJi39'
          >
            C++ tutorial
          </Link>{' '}
          offered by ETH
        </li>
        <li>
          <Link target='_blank' href='https://pythontutor.com/cpp.html'>
            Python Tutor C++
          </Link>{' '}
          (beware, <span className='cpp-code'>std::cin</span> does not work!)
        </li>
      </ul>

      <h2>Contact</h2>
      <ul>
        <li>
          <Link href='mailto:ffrauenfelde@student.ethz.ch'>
            ffrauenfelde@student.ethz.ch
          </Link>
        </li>
        <li>
          <Link href='mailto:florian.frauenfelder@inf.ethz.ch'>
            florian.frauenfelder@inf.ethz.ch
          </Link>{' '}
          (probably not going to work after December 2024)
        </li>
      </ul>

      {/* <h2>Exercise session</h2>
      <ul>
        <li>Tuesday</li>
        <li>16:15 - 18:00</li>
        <li>
          <Link
            target='_blank'
            href='https://ethz.ch/staffnet/en/utils/location.html?building=CAB&floor=G&room=59'
          >
            CAB G 59
          </Link>
        </li>
      </ul> */}
    </>
  );
}
