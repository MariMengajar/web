import Link from 'next/link';
import Image from 'next/image';

export default function Index() {
  return (
    <>
      <section className='header relative pt-16 items-center flex h-screen max-h-860-px'>
        <div className='container mx-auto items-center flex flex-wrap'>
          <div className='w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4'>
            <div className='pt-32 sm:pt-0'>
              <h2 className='font-semibold text-4xl text-slate-600'>
                Mentora - A Personalized Learning Platform.
              </h2>
              <p className='mt-4 text-lg leading-relaxed text-slate-500'>
                Mentora is Free and Open Source. It is an innovative and effective solution that
                promotes a culture of voluntary teaching and learning, builds stronger communities,
                and empowers individuals to achieve their full potential.
              </p>
              <div className='mt-12'>
                <a
                  href='#'
                  target='_blank'
                  className='get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-400 active:bg-slate-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150'
                >
                  CHECK MENTOR&apos;S BIO
                </a>
                <a
                  href='#'
                  className='github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600 uppercase text-sm shadow hover:shadow-lg'
                  target='_blank'
                >
                  VOTE A SUBJECT
                </a>
              </div>
            </div>
          </div>
        </div>
        <Image
          className='absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px'
          src='/img/college_class.jpg'
          height={500}
          width={500}
          alt='...'
        />
      </section>

      <section className='mt-48 md:mt-40 pb-40 relative bg-slate-100'>
        <div className='container mx-auto'>
          <div className='flex flex-wrap items-center'>
            <div className='w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32'>
              <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-950'>
                <Image
                  alt='...'
                  src='/img/online_book.jpg'
                  height={466}
                  width={700}
                  className='w-full align-middle rounded-t-lg'
                />
                <blockquote className='relative p-8 mb-4 bg-transparent'>
                  <svg
                    preserveAspectRatio='none'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 583 95'
                    className='absolute left-0 w-full block h-95-px -top-94-px'
                  >
                    <polygon
                      points='-30,95 583,95 583,65'
                      className='text-blue-950 fill-current'
                    ></polygon>
                  </svg>
                  <h4 className='text-xl font-bold text-white'>
                    Great for teaching and learning experiences
                  </h4>
                  <p className='text-md font-light mt-2 text-white'>
                    Whether you&apos;re looking to improve your grades, learn a new skill, or just
                    explore your interests for free, Mentora has got you covered. Join our community
                    of learners and educators today and unlock your full potential.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className='w-full md:w-6/12 px-4'>
              <div className='flex flex-wrap'>
                <div className='w-full md:w-6/12 px-4'>
                  <div className='relative flex flex-col mt-4'>
                    <div className='px-4 py-5 flex-auto'>
                      <div className='text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                        <i className='fas fa-graduation-cap'></i>
                      </div>
                      <h6 className='text-xl mb-1 font-semibold'>Mentor&apos;s Bio</h6>
                      <p className='mb-4 text-slate-500'>
                        It provides concise information about our educators to help mentees choose
                        the best fit for their learning needs.
                      </p>
                    </div>
                  </div>
                  <div className='relative flex flex-col min-w-0'>
                    <div className='px-4 py-5 flex-auto'>
                      <div className='text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                        <i className='fas fa-calendar'></i>
                      </div>
                      <h6 className='text-xl mb-1 font-semibold'>Scheduling</h6>
                      <p className='mb-4 text-slate-500'>
                        We also feature a scheduling system by using the Google Calendar.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='w-full md:w-6/12 px-4'>
                  <div className='relative flex flex-col min-w-0 mt-4'>
                    <div className='px-4 py-5 flex-auto'>
                      <div className='text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                        <i className='fas fa-newspaper'></i>
                      </div>
                      <h6 className='text-xl mb-1 font-semibold'>Vote A Subject</h6>
                      <p className='mb-4 text-slate-500'>
                        Easily choose what subjects you want to learn and the mentors will fill in
                        the gaps to provide tailored lessons just for you.
                      </p>
                    </div>
                  </div>
                  <div className='relative flex flex-col min-w-0'>
                    <div className='px-4 py-5 flex-auto'>
                      <div className='text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                        <i className='fas fa-star'></i>
                      </div>
                      <h6 className='text-xl mb-1 font-semibold'>Ranking System</h6>
                      <p className='mb-4 text-slate-500'>
                        Ensures commitment from both mentees and mentors, as failure to attend
                        scheduled sessions may result in a deduction of ranking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container mx-auto overflow-hidden pb-20'>
          <div className='flex flex-wrap items-center'>
            <div className='w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48'>
              <div className='text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white'>
                <i className='fas fa-graduation-cap'></i>
              </div>
              <h3 className='text-3xl mb-2 font-semibold leading-normal'>Mentor&apos;s Bio</h3>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600'>
                Allows mentors to create a brief profile that highlights their background,
                experience, and expertise. This enables learners to get to know their potential
                mentor better.
              </p>
              <div className='block pb-6'>
                <span className='text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Math
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Science
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Public Speaking
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Beauty Guru
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Finance
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Social
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Trading
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Language
                </span>
              </div>
              <a
                href='#'
                target='_blank'
                className='font-bold text-slate-700 hover:text-slate-500 ease-linear transition-all duration-150'
              >
                View All <i className='fa fa-angle-double-right ml-1 leading-relaxed'></i>
              </a>
            </div>

            <div className='w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0'>
              <Image
                alt='...'
                className='max-w-full rounded-lg shadow-xl'
                style={{
                  transform:
                    'scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)',
                }}
                src='/img/teacher_bio.jpg'
                width={464}
                height={321}
              />
            </div>
          </div>

          <div className='flex flex-wrap items-center pt-32'>
            <div className='w-full md:w-6/12 px-4 mr-auto ml-auto mt-32'>
              <div className='justify-center flex flex-wrap relative'>
                <div className='my-4 w-full lg:w-6/12 px-4'>
                  <a href='#' target='_blank'>
                    <div className='bg-red-600 shadow-lg rounded-lg text-center p-8'>
                      <Image
                        alt='...'
                        className='shadow-md rounded-full max-w-full w-24 mx-auto p-2 bg-white'
                        src='/img/bahasa.jpg'
                        width={96}
                        height={96}
                      />
                      <p className='text-lg text-white mt-4 font-semibold'>Language</p>
                    </div>
                  </a>
                  <a href='#' target='_blank'>
                    <div className='bg-sky-500 shadow-lg rounded-lg text-center p-8 mt-8'>
                      <Image
                        alt='...'
                        className='shadow-md rounded-full max-w-full w-24 mx-auto p-2 bg-white'
                        src='/img/ipa.jpg'
                        width={96}
                        height={96}
                      />
                      <p className='text-lg text-white mt-4 font-semibold'>Science</p>
                    </div>
                  </a>
                  <a href='#' target='_blank'>
                    <div className='bg-slate-700 shadow-lg rounded-lg text-center p-8 mt-8'>
                      <Image
                        alt='...'
                        className='shadow-md rounded-full max-w-full w-24 mx-auto p-2 bg-white'
                        src='/img/mtk.jpg'
                        width={96}
                        height={96}
                      />
                      <p className='text-lg text-white mt-4 font-semibold'>Math</p>
                    </div>
                  </a>
                </div>
                <div className='my-4 w-full lg:w-6/12 px-4 lg:mt-16'>
                  <a href='#' target='_blank'>
                    <div className='bg-yellow-500 shadow-lg rounded-lg text-center p-8'>
                      <Image
                        alt='...'
                        className='shadow-md rounded-full max-w-full w-24 mx-auto p-2 bg-white'
                        src='/img/finance.jpg'
                        width={96}
                        height={96}
                      />
                      <p className='text-lg text-white mt-4 font-semibold'>Finance</p>
                    </div>
                  </a>
                  <a href='#' target='_blank'>
                    <div className='bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8'>
                      <Image
                        alt='...'
                        className='shadow-md rounded-full max-w-full w-24 mx-auto p-2 bg-white'
                        src='/img/coding.jpg'
                        width={96}
                        height={96}
                      />
                      <p className='text-lg text-white mt-4 font-semibold'>Coding</p>
                    </div>
                  </a>
                  <a href='#' target='_blank'>
                    <div className='bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8'>
                      <Image
                        alt='...'
                        className='shadow-md rounded-full max-w-full w-24 mx-auto p-2 bg-white'
                        src='/img/trading.jpg'
                        width={96}
                        height={96}
                      />
                      <p className='text-lg text-white mt-4 font-semibold'>Trading</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className='w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48'>
              <div className='text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white'>
                <i className='fas fa-newspaper text-xl'></i>
              </div>
              <h3 className='text-3xl mb-2 font-semibold leading-normal'>Vote A Subject</h3>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600'>
                It allows mentees to request classes on any subject they want to learn. By simply
                submitting a request, other mentees can vote and show their interest in the subject.
              </p>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600'>
                This helps to ensure that classes are being offered based on mentee demand and
                interest, making for a more engaging and beneficial learning experience.
              </p>
              <div className='block pb-6'>
                <span className='text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Subject
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Options
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Vote
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Vote Count
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Vote Percentage
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Duration
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Final Results
                </span>
                <span className='text-xs font-semibold inline-block py-1 px-2 rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
                  Comments
                </span>
              </div>
              <a
                href='#'
                target='_blank'
                className='font-bold text-slate-700 hover:text-slate-500 ease-linear transition-all duration-150'
              >
                View all <i className='fa fa-angle-double-right ml-1 leading-relaxed'></i>
              </a>
            </div>
          </div>
        </div>

        <div className='container mx-auto px-4 pb-32 pt-48'>
          <div className='items-center flex flex-wrap'>
            <div className='w-full md:w-5/12 ml-auto px-12 md:px-4'>
              <div className='md:pr-12'>
                <div className='text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white'>
                  <i className='fas fa-calendar text-xl'></i>
                </div>
                <h3 className='text-3xl font-semibold'>Scheduling & Ranking System</h3>
                <p className='mt-4 text-lg leading-relaxed text-slate-500'>
                  It allows mentees to choose and book lessons based on their preferred schedule and
                  preferred mentor, while also providing a ranking system that helps mentees select
                  mentors based on their experience and ratings from previous mentees.
                </p>
                <ul className='list-none mt-6'>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-slate-50 mr-3'>
                          <i className='fas fa-fingerprint'></i>
                        </span>
                      </div>
                      <div>
                        <h4 className='text-slate-500'>Efficient Scheduling</h4>
                      </div>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-slate-50 mr-3'>
                          <i className='fab fa-html5'></i>
                        </span>
                      </div>
                      <div>
                        <h4 className='text-slate-500'>Personalized Recommendations</h4>
                      </div>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-slate-50 mr-3'>
                          <i className='far fa-paper-plane'></i>
                        </span>
                      </div>
                      <div>
                        <h4 className='text-slate-500'>Fair and Transparent</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className='w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0'>
              <Image
                alt='...'
                className='max-w-full rounded-lg shadow-xl'
                style={{
                  transform:
                    'scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)',
                }}
                src='/img/checklist.jpg'
                width={464}
                height={321}
              />
            </div>
          </div>
        </div>

        <div className='justify-center text-center flex flex-wrap mt-24'>
          <div className='w-full md:w-6/12 px-12 md:px-4'>
            <h2 className='font-semibold text-4xl'>Learn for Free with Mentora</h2>
            <p className='text-lg leading-relaxed mt-4 mb-4 text-slate-500'>
              Mentora offers free learning opportunities to improve education quality and help
              alleviate poverty, by providing access to high-quality tutors and educational
              resources. With Mentora, anyone can learn for free and unlock their full potential,
              regardless of their financial circumstances.
            </p>
          </div>
        </div>
      </section>

      <section className='block relative z-1 bg-slate-600'>
        <div className='container mx-auto'>
          <div className='justify-center flex flex-wrap'>
            <div className='w-full lg:w-12/12 px-4  -mt-24'>
              <div className='flex flex-wrap'>
                <div className='w-full lg:w-4/12 px-4'>
                  <h5 className='text-xl font-semibold pb-4 text-center'>Login Page</h5>
                  <Link href='/auth/login'>
                    <div className='hover:-mt-4 relative flex flex-col break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150'>
                      <Image
                        alt='...'
                        className='align-middle border-none max-w-full h-auto rounded-lg'
                        src='/img/login.jpg'
                        width={800}
                        height={600}
                      />
                    </div>
                  </Link>
                </div>

                <div className='w-full lg:w-4/12 px-4'>
                  <h5 className='text-xl font-semibold pb-4 text-center'>Profile Page</h5>
                  <Link href='/profile'>
                    <div className='hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150'>
                      <Image
                        alt='...'
                        className='align-middle border-none max-w-full h-auto rounded-lg'
                        src='/img/profile.jpg'
                        width={800}
                        height={600}
                      />
                    </div>
                  </Link>
                </div>

                <div className='w-full lg:w-4/12 px-4'>
                  <h5 className='text-xl font-semibold pb-4 text-center'>Landing Page</h5>
                  <Link href='/landing'>
                    <div className='hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150'>
                      <Image
                        alt='...'
                        className='align-middle border-none max-w-full h-auto rounded-lg'
                        src='/img/landing.jpg'
                        width={800}
                        height={600}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 bg-slate-600 overflow-hidden'>
        <div className='container mx-auto pb-64'>
          <div className='flex flex-wrap justify-center'>
            <div className='w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64'>
              <div className='text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white'>
                <i className='fas fa-code-branch text-xl'></i>
              </div>
              <h3 className='text-3xl mb-2 font-semibold leading-normal text-white'>Open Source</h3>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-slate-400'>
                Since{' '}
                <a href='https://mentora.com/' className='text-slate-300' target='_blank'>
                  Mentora
                </a>{' '}
                is a platform dedicated to learning, we want to provide everyone with the
                opportunity to explore and expand their knowledge. That&apos;s why we offer a free
                version of Mentora where you can access a wide range of educational resources and
                engage with a community of passionate learners and educators. Join us now and unlock
                your full potential!
              </p>
              <p className='text-lg font-light leading-relaxed mt-0 mb-4 text-slate-400'>
                Get it free on Github and please help us spread the news with a Star!
              </p>
              <a
                href='https://github.com/MariMengajar/web'
                target='_blank'
                className='github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600 uppercase text-sm shadow hover:shadow-lg'
              >
                Github Star
              </a>
            </div>

            <div className='w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative'>
              <i className='fab fa-github text-slate-700 absolute text-55 -top-150-px -right-100 left-auto opacity-80'></i>
            </div>
          </div>
        </div>
      </section>

      <section className='pb-16 bg-slate-200 relative pt-32'>
        <div
          className='-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20'
          style={{ transform: 'translateZ(0)' }}
        >
          <svg
            className='absolute bottom-0 overflow-hidden'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'
            version='1.1'
            viewBox='0 0 2560 100'
            x='0'
            y='0'
          >
            <polygon
              className='text-slate-200 fill-current'
              points='2560 0 2560 100 0 100'
            ></polygon>
          </svg>
        </div>

        <div className='container mx-auto'>
          <div className='flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10'>
            <div className='w-full text-center lg:w-8/12'>
              <p className='text-4xl text-center'>
                <span role='img' aria-label='love'>
                  😍
                </span>
              </p>
              <h3 className='font-semibold text-3xl'>Do you love MENTORA?</h3>
              <p className='text-slate-500 text-lg leading-relaxed mt-4 mb-4'>
                Join Mentora now to become a voluntary mentor or mentee and unlock your full
                potential. Whether you&apos;re looking to learn a new skill, improve your grades, or
                explore your interests, Mentora has got you covered. Don&apos;t miss out on the
                opportunity to be a part of our community!
              </p>
              <div className='sm:block flex flex-col mt-10'>
                <a
                  href='#'
                  target='_blank'
                  className='get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-slate-400 active:bg-slate-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150'
                >
                  CHECK MENTOR&apos;S BIO
                </a>
                <a
                  href='#'
                  target='_blank'
                  className='github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600 uppercase text-sm shadow hover:shadow-lg'
                >
                  <span>VOTE A SUBJECT</span>
                </a>
              </div>
              <div className='text-center mt-16'></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
