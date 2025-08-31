// src/pages/Quiz.tsx
import { useEffect, useMemo, useRef, useState } from 'react'
import { MCQS, type MCQ } from '../data/questions'
import Tag from '../components/Tag'

function MCQCard({
  mcq,
  index,
  onAnswer,
  marked,
}: {
  mcq: MCQ
  index: number
  onAnswer: (i: number) => void
  marked?: number
}) {
  return (
    <div className="card p-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Q{index + 1}. {mcq.q}</h3>
        <div className="flex gap-2">{mcq.tags?.map((t) => <Tag key={t} label={t} />)}</div>
      </div>
      <div className="mt-3 grid gap-2">
        {mcq.options.map((opt, i) => (
          <button
            key={i}
            className={`text-left p-3 rounded-xl border ${marked === i ? 'border-sky-500' : 'border-slate-300 dark:border-slate-700'} hover:bg-slate-50 dark:hover:bg-slate-800`}
            onClick={() => onAnswer(i)}
          >
            {String.fromCharCode(65 + i)}. {opt}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function QuizPage() {
  const [i, setI] = useState(0)
  const [marked, setMarked] = useState<number | undefined>(undefined)
  const [answers, setAnswers] = useState<number[]>([])
  const [timeLeft, setTimeLeft] = useState(60) // seconds per question
  const timerRef = useRef<number | null>(null)

  const q = useMemo(() => MCQS[i], [i])

  useEffect(() => {
    setMarked(undefined)
    setTimeLeft(60)
    if (timerRef.current) window.clearInterval(timerRef.current)
    timerRef.current = window.setInterval(() => setTimeLeft((t) => t - 1), 1000)
    return () => { if (timerRef.current) window.clearInterval(timerRef.current) }
  }, [i])

  useEffect(() => { if (timeLeft <= 0) next() }, [timeLeft])

  const select = (opt: number) => setMarked(opt)

  const next = () => {
    const sel = marked ?? -1
    const nextAnswers = [...answers]
    nextAnswers[i] = sel
    setAnswers(nextAnswers)
    if (i < MCQS.length - 1) setI(i + 1)
    else setShowReview(true)
  }

  const [showReview, setShowReview] = useState(false)

  if (!q) return <div className="container py-6">No questions loaded.</div>

  if (showReview) {
    const score = answers.reduce((acc, a, idx) => acc + (a === MCQS[idx].answer ? 1 : 0), 0)
    return (
      <div className="container py-6 space-y-4">
        <div className="card p-4">
          <h2 className="text-xl font-bold">Your Score: {score} / {MCQS.length}</h2>
          <p className="text-sm text-slate-500">Tap each question to view the explanation.</p>
        </div>
        <div className="space-y-4">
          {MCQS.map((mcq, idx) => (
            <details key={mcq.id} className="card p-4">
              <summary className="cursor-pointer font-semibold flex items-center justify-between">
                <span>Q{idx + 1}. {mcq.q}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${answers[idx] === mcq.answer ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'}`}>
                  {answers[idx] === mcq.answer ? 'Correct' : 'Wrong'}
                </span>
              </summary>
              <ul className="mt-2 list-disc pl-5 text-sm">
                {mcq.options.map((o, oi) => (
                  <li key={oi} className={`${oi === mcq.answer ? 'font-semibold' : ''}`}>
                    {String.fromCharCode(65 + oi)}. {o}
                  </li>
                ))}
              </ul>
              {mcq.explanation && (
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{mcq.explanation}</p>
              )}
            </details>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="container py-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm text-slate-500">Question {i + 1} / {MCQS.length}</div>
        <div className={`text-sm font-semibold ${timeLeft <= 10 ? 'text-rose-500' : ''}`}>Time Left: {timeLeft}s</div>
      </div>
      <MCQCard mcq={q} index={i} marked={marked} onAnswer={select} />
      <div className="flex justify-between">
        <button className="btn-ghost" onClick={() => setI(Math.max(0, i - 1))} disabled={i === 0}>← Prev</button>
        <button className="btn" onClick={next}>{i === MCQS.length - 1 ? 'Finish' : 'Next →'}</button>
      </div>
    </div>
  )
}