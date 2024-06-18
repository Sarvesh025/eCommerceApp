import React, {Suspense} from 'react'
import styles from './about.module.css'
import LazyLoader from '../../components/LazyLoader';
const TeamMember = React.lazy(() => import ('../../components/TeamMember'));
const Blog = React.lazy(() => import ('../../components/Blog'));

export default function index() {
    return (
        <div>
            <div className={styles.ourStory}>
                <h1>Our Story</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eos id alias tempore. Adipisci facere officia dignissimos autem omnis, quae amet doloremque voluptatem cupiditate. Blanditiis mollitia itaque, distinctio dignissimos quidem quae. Nobis et facere, quasi necessitatibus natus, eligendi tempore eveniet repellendus libero quidem, nam voluptatem aspernatur mollitia vitae eius itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet obcaecati ullam exercitationem similique, ut neque voluptate cumque, ducimus dolore maiores optio quae! Quas, facilis nostrum! Aliquam, officia explicabo pariatur quaerat impedit quod voluptates!</p>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyLoader>
            <div className={styles.meetTheTeam}>
                <h1>Meet The Team</h1>
                <div className={styles.members}>
                <LazyLoader>
                    <TeamMember heading = "Co-Founder" img='' intro="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum neque repellat dolorum deserunt quod itaque officia minima, fuga consequatur quasi."/>
                </LazyLoader>
                <LazyLoader>
                    <TeamMember heading = "Co-Founder" img='' intro="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum neque repellat dolorum deserunt quod itaque officia minima, fuga consequatur quasi."/>
                </LazyLoader>
                    {/* <TeamMember heading = "Co-Founder" img='' intro="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum neque repellat dolorum deserunt quod itaque officia minima, fuga consequatur quasi."/> */}
                </div>
            </div>     
                </LazyLoader>
                <LazyLoader>
                <Blog/>
                </LazyLoader>
            </Suspense>
        </div>
    )
}
