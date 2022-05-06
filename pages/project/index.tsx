import type { NextPage } from "next";
import css from "./index.module.scss";

const ProjectPage: NextPage = () => {
  return (
    <div className={css.projectPageWrapper}>
      <div className={css.contentWrapper}>
        <h1 align="center">Project Title</h1>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className={css.project}>
            <div className={css.milestone}>
              Milestone
              <div className={css.task}>
                Task
                <div className={css.comment}>Comment</div>
                <div className={css.comment}>Comment</div>
              </div>
              <div className={css.task}>
                Task
                <div className={css.comment}>Comment</div>
                <div className={css.comment}>Comment</div>
              </div>
              <div className={css.task}>
                Task
                <div className={css.comment}>Comment</div>
                <div className={css.comment}>Comment</div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
