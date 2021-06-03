import { memo, FC } from "react"
%%imports%%

%%FCs%%

const RenderMain: FC = () => {
  return (
    <div className="render-main" style={{
      position: "relative",
      width: "%%canvasWidth%%",
      height: "%%canvasHeight%%",
    }}>
      %%widgets%%
    </div>
  )
}

export default memo(RenderMain)
