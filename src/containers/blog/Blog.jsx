import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="xconsulting_blog section__padding" id="features">
    <div className="xconsulting_blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="xconsulting_blog-container">
      <div className="xconsulting_blog-container_groupA">
      <Article imgUrl={blog01} date ="Sep 11, 2023" text="Xconsulting is the future. fundice con información relevante y detallada." />
      </div>
      <div className="xconsulting_blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 10, 2023" text="Xconsulting. ESTRATEGIA e INNOVACIÓN De la idea a la implementación" />
        <Article imgUrl={blog03} date="Sep 9, 2023" text="Xconsulting. DATOS Y ANÁLISIS Enfoque humanizado y conocimientos prácticos." />
        <Article imgUrl={blog04} date="Sep 11, 2023" text="Xconsulting. UX/UI Y CREATIVO El diseño moderno se encuentra con la intuición humana" />
        <Article imgUrl={blog05} date="Sep 7, 2023" text="Xconsulting. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);

export default Blog;