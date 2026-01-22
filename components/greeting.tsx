import { motion } from "framer-motion";
import { Sparkles, Globe, TrendingUp } from "lucide-react";

export const Greeting = () => {
  return (
    <div
      className="mx-auto flex size-full max-w-6xl flex-col justify-center px-4 md:px-8"
      key="overview"
    >
      {/* Hero 区域 */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.3 }}
      >
        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 font-bold text-4xl md:text-6xl"
          exit={{ opacity: 0, y: 10 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.4 }}
        >
          让企业出海更简单
        </motion.h1>
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mb-8 max-w-2xl text-muted-foreground text-xl md:text-2xl"
          exit={{ opacity: 0, y: 10 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.5 }}
        >
          AI 驱动的出海落地执行平台，将跨境扩张从咨询行为转化为系统化流程
        </motion.p>
      </motion.div>

      {/* 功能卡片 */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.6 }}
      >
        {/* 卡片 1 */}
        <motion.div
          className="card-hover group cursor-pointer rounded-2xl border border-border bg-card p-6 shadow-sm"
          whileHover={{ scale: 1.02 }}
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Globe className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mb-2 font-semibold text-lg">出海路线图</h3>
          <p className="text-muted-foreground text-sm">
            把模糊的出海想法变成可执行路线图，明确市场、路径、时间表与关键风险节点
          </p>
        </motion.div>

        {/* 卡片 2 */}
        <motion.div
          className="card-hover group cursor-pointer rounded-2xl border border-border bg-card p-6 shadow-sm"
          whileHover={{ scale: 1.02 }}
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mb-2 font-semibold text-lg">决策逻辑</h3>
          <p className="text-muted-foreground text-sm">
            把碎片化的法律、税务、合规信息转化为决策逻辑，告诉你下一步该做什么
          </p>
        </motion.div>

        {/* 卡片 3 */}
        <motion.div
          className="card-hover group cursor-pointer rounded-2xl border border-border bg-card p-6 shadow-sm"
          whileHover={{ scale: 1.02 }}
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <TrendingUp className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mb-2 font-semibold text-lg">系统能力</h3>
          <p className="text-muted-foreground text-sm">
            把一次性咨询经验变成持续演进的系统能力，随法规变化实时更新
          </p>
        </motion.div>
      </motion.div>

      {/* 示例问题 */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="mt-12"
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.7 }}
      >
        <p className="mb-4 text-center text-muted-foreground text-sm">
          试试这些问题：
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "如何在新加坡设立公司？",
            "东南亚市场准入要求",
            "跨境税务合规指南",
            "新加坡 EP 签证申请流程",
          ].map((question, index) => (
            <motion.button
              key={question}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-full border border-border bg-background px-4 py-2 text-sm transition-all duration-200 hover:border-primary hover:bg-accent"
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              type="button"
            >
              {question}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
