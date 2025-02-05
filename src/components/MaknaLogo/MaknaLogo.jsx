import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import './MaknaLogo.css';
export default function MaknaLogoTimeline() {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true });
  const { ref: ref6, inView: inView6 } = useInView({ triggerOnce: true });
  const { ref: ref7, inView: inView7 } = useInView({ triggerOnce: true });
  const { ref: ref8, inView: inView8 } = useInView({ triggerOnce: true });

  const timelineAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const textAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="makna-logo">
      <h1>Makna Logo</h1>
      <div className="content">
        <img src="/logobemfmikom.png" alt="logo" />
        <div className="timeline-makna">
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            <TimelineItem>
              <TimelineSeparator>
                <motion.div
                  ref={ref1}
                  initial="hidden"
                  animate={inView1 ? 'visible' : 'hidden'}
                  variants={timelineAnimation}
                >
                  <TimelineDot sx={{ backgroundColor: '#fac614' }} />
                </motion.div>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  ref={ref1}
                  initial="hidden"
                  animate={inView1 ? 'visible' : 'hidden'}
                  variants={textAnimation}
                >
                  Tiga lingkaran berwarna kuning melambangkan adanya tiga
                  program studi di Fakultas.
                </motion.div>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <motion.div
                  ref={ref2}
                  initial="hidden"
                  animate={inView2 ? 'visible' : 'hidden'}
                  variants={timelineAnimation}
                >
                  <TimelineDot sx={{ backgroundColor: '#28a745' }} />
                </motion.div>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  ref={ref2}
                  initial="hidden"
                  animate={inView2 ? 'visible' : 'hidden'}
                  variants={textAnimation}
                >
                  Satu lingkaran berwarna hijau melambangkan Fakultas Matematika
                  dan Ilmu Komputer.
                </motion.div>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <motion.div
                  ref={ref3}
                  initial="hidden"
                  animate={inView3 ? 'visible' : 'hidden'}
                  variants={timelineAnimation}
                >
                  <TimelineDot sx={{ backgroundColor: '#0066cc' }} />
                </motion.div>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  ref={ref3}
                  initial="hidden"
                  animate={inView3 ? 'visible' : 'hidden'}
                  variants={textAnimation}
                >
                  Lingkaran paling luar melambangkan Universitas.
                </motion.div>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <motion.div
                  ref={ref4}
                  initial="hidden"
                  animate={inView4 ? 'visible' : 'hidden'}
                  variants={timelineAnimation}
                >
                  <TimelineDot sx={{ backgroundColor: '#fac614' }} />
                </motion.div>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  ref={ref4}
                  initial="hidden"
                  animate={inView4 ? 'visible' : 'hidden'}
                  variants={textAnimation}
                >
                  Tulisan Badan Eksekutif Mahasiswa melambangkan nama
                  organisasi.
                </motion.div>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <motion.div
                  ref={ref5}
                  initial="hidden"
                  animate={inView5 ? 'visible' : 'hidden'}
                  variants={timelineAnimation}
                >
                  <TimelineDot sx={{ backgroundColor: '#f9a825' }} />
                </motion.div>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  ref={ref5}
                  initial="hidden"
                  animate={inView5 ? 'visible' : 'hidden'}
                  variants={textAnimation}
                >
                  Tulisan Unugha melambangkan naungan organisasi ini.
                </motion.div>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <motion.div
                  ref={ref6}
                  initial="hidden"
                  animate={inView6 ? 'visible' : 'hidden'}
                  variants={timelineAnimation}
                >
                  <TimelineDot sx={{ backgroundColor: '#28a745' }} />
                </motion.div>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  ref={ref6}
                  initial="hidden"
                  animate={inView6 ? 'visible' : 'hidden'}
                  variants={textAnimation}
                >
                  Warna Hijau melambangkan kemakmuran.
                </motion.div>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <motion.div
                  ref={ref7}
                  initial="hidden"
                  animate={inView7 ? 'visible' : 'hidden'}
                  variants={timelineAnimation}
                >
                  <TimelineDot sx={{ backgroundColor: '#f9a825' }} />
                </motion.div>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  ref={ref7}
                  initial="hidden"
                  animate={inView7 ? 'visible' : 'hidden'}
                  variants={textAnimation}
                >
                  Warna Kuning melambangkan kesemangatan.
                </motion.div>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <motion.div
                  ref={ref8}
                  initial="hidden"
                  animate={inView8 ? 'visible' : 'hidden'}
                  variants={timelineAnimation}
                >
                  <TimelineDot sx={{ backgroundColor: '#212121' }} />
                </motion.div>
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  ref={ref8}
                  initial="hidden"
                  animate={inView8 ? 'visible' : 'hidden'}
                  variants={textAnimation}
                >
                  Warna Hitam melambangkan kewibawaan.
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
}
