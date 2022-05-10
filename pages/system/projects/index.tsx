import type { NextPage } from "next";
import SystemPageHOC from "../../../ui/hocs/system-page-hoc/SystemPageHOC";
import css from "./index.module.scss";

const ProjectsPage: NextPage = () => {
  return (
    <SystemPageHOC>
      <div className={css.projectPageWrapper}>
        <div className={css.contentWrapper}>
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
    </SystemPageHOC>
  );
};

export default ProjectsPage;
