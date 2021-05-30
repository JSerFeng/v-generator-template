import { memo, FC } from "react"
%%imports%%

%%FCs%%

const RenderMain: FC = () => {
  return (
    <div className="render-main">
      %%widgets%%
    </div>
  )
}

export default memo(RenderMain)
