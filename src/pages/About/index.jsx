import React from 'react'
import styles from './about.module.css'
import TeamMember from '../../components/TeamMember/index'
import Blog from '../../components/Blog/index'
export default function index() {
    return (
        <div>
            <div className={styles.ourStory}>
                <h1>Our Story</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eos id alias tempore. Adipisci facere officia dignissimos autem omnis, quae amet doloremque voluptatem cupiditate. Blanditiis mollitia itaque, distinctio dignissimos quidem quae. Nobis et facere, quasi necessitatibus natus, eligendi tempore eveniet repellendus libero quidem, nam voluptatem aspernatur mollitia vitae eius itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet obcaecati ullam exercitationem similique, ut neque voluptate cumque, ducimus dolore maiores optio quae! Quas, facilis nostrum! Aliquam, officia explicabo pariatur quaerat impedit quod voluptates!</p>
            </div>
            <div className={styles.meetTheTeam}>
                <h1>Meet The Team</h1>
                <div className={styles.members}>
                    <TeamMember heading = "Co-Founder" img='' intro="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum neque repellat dolorum deserunt quod itaque officia minima, fuga consequatur quasi."/>
                    <TeamMember heading = "Co-Founder" img='' intro="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum neque repellat dolorum deserunt quod itaque officia minima, fuga consequatur quasi."/>
                </div>
            </div>
            <div className={styles.ourBlog}>
                <h1>Our Blog</h1>
                <Blog/>
            </div>
        </div>
    )
}
