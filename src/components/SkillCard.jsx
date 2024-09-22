import React from "react";

import skill from "../assets/skills.png";

const SkillCard = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-20">
      <div className="bg-violet-800 rounded-lg shadow-lg p-6 w-full md:w-2/3 lg:w-1/2">
        <div className="flex justify-center items-center mb-2 -mt-2">
          <img src={skill} alt="skills" />
        </div>

        <div className="flex flex-col items-center font-Russo text-white">
          <p className="mt-5">Frontend</p>
          <div className="flex flex-row">
            <div className="flex flex-wrap">
              <img
                alt="skills"
                src="data:image/png;base64,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"
              />
            </div>
            <div>
              <img
                alt="skills"
                src="data:image/png;base64,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"
              />
            </div>
            <div>
              <img
                alt="skills"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEFUlEQVR4nO3WzW/bdADG8WcMWrHLNA0Q2iRUCYkrY9K2vwHxMl6GQGIdSCCNG4UTCLFyQ+KG4LC8kaxdk8Z13trUdmI7aZukea1TssRdmrTdJJCohnpc2tHWyHHaxHGabqAmOfiRPqdE6fdX58WAPn369OnTp69h+XwfuHvnMbP2LvjVawivDiK0ehlc6TyIfB96coR0HKGVj8Gv0AitbCG0ItWVJfA1XPkR+FIQbPkTZDLPoCcWKl4CV87vR+4rSeCaLSvYqjUElt/qbjxfGgRX2tJEss2KimCjuwpm6dfuXA22+AaCy/+oIoMHRAYaLdUxNbQ4CWq5v3PxgfILCBQfHBrJNBLr6D2FuukCg8nMic4cgFkyKZHiDmiRBiPeAFX4DEzhO9DiOOjCw5aR1J682nSNPxcBmzl5tPFTxbNgxC3QIg/qzsstn8OKp0HlRzSB03fU/HtydVM5Ad6FM20b/Nlz8C2KmMpefPID0EsDoMSh6lfnYfPnvsFUblcVqETW/K42KVuU4MtuwJcdgj93SvV6nuwAfMJP8GYr8AirCIefxpFvMnsdU4s79cBaZCNfNVrLK2zDI9yHR0jDI/wJryDBI1uQ4Ml8io7Nl70K3+K2NjArR2pVA5u4M42CkKRj6Oi8whV4hIr6v7jQLrImLcGlUoA7eRpdmUu4AFe6pIl0aSIluFISSI05EMkX0dXJ3/Vk6gbI1EaLQAlkUsJEEyK5DiL+JQy9cv8kj5h/FmT8fRAJI4hEGhOJv0AkKnAmNuFMyMEpOOM3MZG4DIrq/29/wL3wHtwZE1zpDFyZByBTmzXrIFMZkCkT3MkPOvcL+jiTLxOZ/hpk+u/99+Phl3oDRGK4+wch5s+CTMbavh8nEhKIZnGFM14GMX+xS/HC85hI3G0b6Ww2rxhXqcAeu9LZeEk6Bmece/zImMLRLKoYi27DHr3auQOMz3++H+eI7cIR+wOOaBKO2H04ojuaQHuziGKs0ewObs9+0ZkPrSN6D/boQ9ijP4KIvKR6fCxyCvbIEOyRDW3knOJ2o9m6kZldjMx+e2gDQRyHLfwVrOGBJz+Afe4S7NECxiOvtn9e9AxG5wRV4GijmbqRPeGa0CjGws+1fN1b7Cuw8WHY+E2Yg+1vo//3CPYkRmcirSPDEm7tCanZZFwFVs4JK/89bNx1WPkfYOWDsHI7sHISrOxNdGSGyROwhRltoIxXs8o4rd9kbJ2FXYfhgCt0JPuZ6oeV8x0Y2RxYD5VgCaqZA49gCbyOjk/+8FvYXw4NVCJbMzGbMFAfoauzMG/CHFw7ILCdHAzUBfTE5KthpgdhpAMwMlttojdhZPwwMR9iePgp9OQIog9m6jUY6LdhZK5VmZl3YAyc6637eX369OnTpw/d379j3BOao+D9NwAAAABJRU5ErkJggg=="
              />
            </div>
            <div>
              <img
                alt="skills"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVUlEQVR4nGNgGAWjYBSMgkEJvt+X+z+YMMOoB+6PxsD/0SREChjoJPN9NBPfH/hQ/z5ajN4f+JD/PlqR3R8cmIFUMNAO/j7qgfsDH+rfR5PQfUpCjBGOl04VQZE7s1Pyf6gv939xUZb/LMyM/yXFWf5HBvD8P7tTcvB7YPtSsf8c7Ewo8gxQzMXJBJYftB74elfuv4IsK1ycnY3pv4YKG5iGiZkasP//dm+QeuDkNgm4GBMT4//TOyBJ5tZRqf9K8qz/cxL5/r++Kjt4Y2DXCnG4GCgZfbyFcOy769gdPqg8cPuYNIq4rxvX/5tHpIg0bxB4AIRd7ThR5DjYmf4nhvP+v7xfamh44N4J6f/62uwYJRAzMyPYI28Gcx6AYZAjy7L5//NwYRanOups/59fkBncHoDhp+dk/jeXCfwXE2FBUZ8VzzewHgCV9/g8gF7Ov7gkAy7/YeplJFno5wFQKeLjwvV/3VxRuNjVA1IoHliLJDe3T/i/kS47RnnfXSsIV8/GykQfDyyeLAKu/mGlSU4S3/+JzUL/LU04UDwAavuA1IPaPzAxe0vO/3eOS4PFn1+U+W9rjtADqq3p4oFL+6TgHsCFVRRY4Ummpx4RyiDMyMj4X0qCBaUpAcKlWfz0S0I7l4v95+Nhxup4UFLYugTROAN5pCJHAK+Hbcw4sBalNPMACD84Jf0/O4Hvv6wUK7g8BzWTAz25/x/fLIFV/aH1Ev/D/Xn+qylBGnIC/Mxgh09pE/r/+TauUo2GHqAHZhj1wP3RGPhP1yQ0CkbBKBgFDPQAANX6rlnxM/hBAAAAAElFTkSuQmCC"
              />
            </div>
            <div>
              <img
                alt="skills"
                src="data:image/png;base64,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"
              />
            </div>
            <div>
              <img
                alt="skills"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAENUlEQVR4nO1YW2gcVRg+xhvEG9iiqA8iqIhabxVrlOb8/26qQQMqdmXn/ycVpa4PRRD0xfowPngBlUpNzZx/NiIKKsQbtOiTYis+iCgiKlZLVbwggvdilZY0ciaZNU33zM7sTncTyQfnJTn/7Pf957+do9QS/meol6oX1ZFWFr0mK5UjuyLAIG8T5OlCF9DOrpCPBWj2CxeA/EDXBExcdfsJgry3SAFhic9X3YQAv1IUeQP8seo2IuRbMhD7VJBeyrBvY9cFyEitX5D3pIaF5rURVi8QoKm0fXXtn616AYP8Ypr3gyDom9lHL7v30fuqVxDt3+j0bIkqyb5x7V/oPAWge3omYPPw8LEC/Hua9xMI0muH7EM+MIF0puolBOjZNO8nGB+sXmoJz9v7ruo1QvSua+X9BAK8dd4J3KV6DVlZO1qAfk7zfgIp8WWNUwCamhiqnq4WAgSpPkvqM5f3ExjgN2arz1tqoUA0DVlStrm13Av+qpnwoZpaKAi0PkqQH2/l/QQC9Khob3njD0tYzAg1rxXg1wXoQ4P0VL1UPTWLnQxVThKgR2zixrbAG21jy2QLfL1NYgHeHY8jg7SiLfKCdG+TLvpDq/icrFSOsaQPHQt4stVvhshek4a2J9J0SS7yW3TleAH6xzGIPZZma9C/zTkDgb/KZRcEQZ8Afd/cjrfmEhCWvCtSJsTUGi1AT7gF8J1OO+0td/4m0ne5BNhYTxHwdJqtreFuAZ522U0rdYQB/sUhfIfKCwF+vsnH9hs9enma3XNr/OMM0BfNSCRPI9Fq/yyD/IFdonl9QzxQ4Ai9m3MLsHlgkIxB+nv2Q19G4F2bxTYsrTvDVhDr0TjxkbdsHuYT/yPKm+aExy6b+EnTi0UA/THzf/pRgG9VHXfSAjujDSNB2pdWGIIg6MtasruKqMQ3GaQ/HdVtU9ZeketaWL+mcnLbNzI7Ipe9gQjpDkF625nc2FhfC/D9oWawuRYLBhqzF6PcBMJB75z4rppSu9MgwGEGwtNZlgH+JjcBAxzFxmVvIK9tiP66oshLOwLiPjDbiW1nzUUe6Ib5SdqxAOTtuQSYEt89x3hbZvLInmsE6ewEaEMuAQclHNBUpPnK1pcWeqjJINb5AtqZqzrZbilAfx38Ed49vsY/panYQVphX9AKJ47x+jb306Ks5tOaxyHtCtG/uLFPe+cZ5GdavW22ufbaKtZWCbceTfnw/plXBnqzqHAxyAcM0ld2ZDbAD9vaP3fsyA37nHeYwiFZvwrQC3a0NmVvoCOyTU9gpNZffDLSPgP0qn2pswmvDjcM8keFELfFAOjJrj/SGqANncU1/WaQHnRVru68aSK914bHfxKk+wqP63YwVh5dZoDeyRjjn8RXyZFav1pImLRNTfN6R058bi8iIdDVajFgrDy6zDayqDx6buEXjyWoxYt/Abb+az96WiNwAAAAAElFTkSuQmCC"
              />
            </div>
            <div>
              <img
                alt="skills"
                src="data:image/png;base64,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"
              />
            </div>
            <div>
              <img
                alt="framer-motion"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA10lEQVR4nO3aIQ7CQBCF4f8YoCEVkN4DVA2mAofFI5GcjpOUhBsMwdVCh93+CS95eudzM8nCP56sgQPQF2oHLDMB+4LD9yNEWpoKgJ7kbOyAGgjsCOwI7AjsCOwI7AjsCOwI7Ihqaee2zJVGdFnr9BEYgPiyVypnmDD8LBCR1JsdELUQYUeEHRF2RNgRYUeEHRF2RNgRYUdEhZ7ntsx92nsm4AI8Cg7/BE6ZgIX1JBxnawdMOdSxI7AjsCOwI7AjsCOwI7AjsCN0aUfDv/9WKNMAO2D165degJIppvHhMPgAAAAASUVORK5CYII="
              />
            </div>
          </div>
          <p className="mt-5">Backend</p>
          <div className="flex flex-row">
            <div className="flex flex-wrap">
              <div>
                <img
                  alt="skills"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE0ElEQVR4nO1ZaYhbVRR+03Hfd6mO8859M7XSH1Up/hCKFRUR0T8t0boWJznnzVTb0l+KaEcQcV+Kv4KtM++chEIQoS4V/OGCtYoLImqpIrgUB63SsVrrUtvIecnEl5tM5k0mmTylH4Q8knfv/b5771nuuY5zCP9TnJun07wc3Wg4c5PHg2c4/xX0FNYeDUx3AuOvRqioH2D60witn79h4HgnyTBM1xrBryaI13yYvgMmcoaH5zhJQl8+swgYt1pk/wbBZ0Fwgz5H/wOht43gRYnY57o1bIJG6A03l7lg4j03T+cZpi2WwINGqNC3aeicWSe+KEuHg+AaYNxTNbNMO4H9W52i0zXZFgOhLy2xe43gfe7IiqNmhbwJ8AojtN0i8ZuSUANuXjx+G4pvFxptA8gNuNPtr1dorhHMGsEDVp+vmdH0wpYR780Pnaz7HBj3W9vlAy+gxS1xAEJvVa9oKIr7N952etMdL3l9+DB1eSC0y5qhsZa7wqLTZZhShunr6rFwt8aUBYXUEdPqT5WD4PvVrg//AKYHFxRWHue0CWfyzccawfsN4z5rtd87K7j91NgdgVDOmvXne/NDnjNLcEd8UNuytlUQuwNg+rm8hPs8ocvbyrYBIMAlJTcbihh34iISMT91WuTBQDLXhTbFtFq/Xaarekb9s6fkwvTRBJ+2CND9Wfbje9TwK38UUt0e01CdwFW0vZlhXNY5ARGClWhaSHWr3TQiXisEH0+MACO40iK3FYTuNYIDkKPr3YAGlbCx3WYuc01CBNC7EfIPNEorTGSlQPDVZAhgGqv8FtDFjdsPzi+nJDreL3Yi2CEB+Flka0yZMoPgGiP4EAiuS4QAjdh1jPQLEHpOtxQEeIsbDF4YJ0XoiIBySrAthufZD4KfGKFH+zjdnxgBkbzfN0zv1KTMk4lhWp0YAVHo75rjhxmn0N16VjaMb6rRWvnOAfusPOsCtAZUTo1Temhp1LZ//aoj1feD0DcRIQ93VIBhvCMyo9k44wHTPREB3FEBXuBfXSHDNKYGHUPAM//aAj3WUQHlytz3kVXY5nHmsqpEL5L3g+C6aFlG3+2ogNKguKye5wGmHw3jjrAN4+463qiQGC8UGifTzqncp6nEA3q6XmDrqBvVWOAFtFTJhRlpKRrv0pUAoc+B6UVP6K5ezphJuTQpYLzc6Pd6KW5cATMFCF1ZKpqVKhSxGxqhESvAvKLHwpoXi05XtOyiM94K4l7enweCL1j2szF2Bz2F9Cl2tRmE/jKMT2qhqzJQQEujBjpT4v2y6gTD+Ej5PqHqQBQdNx4KqW7IZRAEf7CMbq9h2gxML1kD1XiQ2BgenmPYT1e733DS1F5IuTTdt1egEzW42LNSW/Tyz2+q/4AWhwd7a7VB6Al3ZMVJTROvGSjvzzNMTxnBnywB213xL51uf3rIMUKbJk5jkcl4WU9pTrsQJmCj6YWQo0smy+EbYW6WjtFSfMW7yETagTs0DXE6Ab28M4xrQehjrTjULfwWnS6XcbneA1grOK5tW+XBpg29GwhThKrZpA+jh/m6JfQw/8HsjErorYIWftUzWQQPAqNoUbZOXlR1h5YYaCHYqkgUp3OHlghU7sCqj4ux79ASA43mnvg3qOHqc6f5HILTJvwDFDl0Rr2QsrgAAAAASUVORK5CYII="
                />
              </div>
              <div>
                <img
                  alt="skills"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFBUlEQVR4nO2YS4hcRRSGr0ETX3kJCaJZZBUEI7gwoJKFQXAhydLoQhGiIjELNwZEFAaEMOtk6cJFdGFEISguspA8FOMICYjGcZIMCqNG+77qec6pqukjdW9PnOn0TN/ukMHF/aDopuv1n6pTp051krS0tLS0tLS0tCwLM2+CEA6Rm/+MfLiMLqTgvAbvL4ELJ4DCq8x8T/J/g5nvID8/gT4I8vO8UNCHurjAsFDIF9aF95j59v5xDPgJDU5ocB+lzBvG0ZKmvKHQ+HGhQRQKJoZ2MMzbKIQpCvNRaJfc/JcUwktE9DAzb2Tme+N3oPAKUDhtyHctBbbopwBge99CrNHoTml0rIHODDJyJWL7QuOZQiPnGk/F8YZ1uN/58GsUTz7MOMePr9ghSRIAv8eQv2LJsyZ/xRh+YHG9lLxFgZtT4FgBTSYjkCuajOILhXNSyi3DxK+hEM5WK+/D+ej/jSdi3qjRnzfk2YC/GF1wiRHW7ZaWvLTUFej3NhpT495cQTdX4HNpdw/t4EJ4s1p5F+YU89ZkRArmTRr9ZY2eNbq3+uuFdYclOJaWsqLP1fqJ9bmGrFp9jYeTYTDzOvLhz+qwhvBcMiYK/NMKXFcDyQ7z+r45bpPWnZTWsbA4xcxrl9GyNlcwVbsOnIz9hk5MIbxQR5rwS6MOK6CRTuvo75Ze7K8rS94sDM0KSywsHR3Uv9B4tDq0Cmdj+0aTop//sAqTLrxzM+IrA4Beqw+s+3xQfWncY6VBFIa4tLR/SZ2i/bV4wNiu8aTkw6VogHVu+GEZgiLaGQ2Q1v20XJvSwKEyGmBQCsQd8TchcEehQfYMODTSpOhCES8oybxyqGpAvLBqA0iu1K4weDwaUWj8sSz5vlzBhTrewycjTwrOd6MB/eFvXOpo43ilNp0Or881TfcuqWs98dPx95EnvCE9cIFtLPGGJV8Vs1CqMLlQ4g1b+fv1siB+mAGRTNHOQoHpuQ0Umh5NxuFWiI+RpqkBeTRA3oQBljxE4ckq0qlcCKZr8XgtV8iZGtOFwPnfogExJUhWiULj8d7KV4c4lXAhU8CpHOcQUzgX3UYRPZKsAjFM5rXfy39EHUbjZ6asTCVwZ9Qwasi/H33eOPdGcospjduVKcDaZZZeZJmy+6MBqbDYKc2uxoNa556sDiz6725WoDA0UWrUhaYDN4gveXOmcLYSL/HYoP4daY9VuyDtbFmWzVKJiEX/fYw0Gvwz44ovFOzp3bCi/zDGHCtTcDKKzyXEZG7doDFmmNelEqaqnZC2WTIX0eifrQxAf7XkhknUIuJBLDRdrgzQ+HZ/fabxcC/SZEUxJJ0uYHtHQlbthLDD0+kFDPoPenH+3CgRqRaP3/RSgx/6Vzc+SDIJPpPQzQXuazJmR+C+jrDdjrDNHjQRZr5Lo/+2uqSsmxbWPTGsT6Hgqf9Wnn5Pjdm2uF4ptTWXOBdXP1Uw0pMyFTBZ7wLM/aVUs0cWM9+tLH3RS8i60tJXwtLLEvEhZr4zHsT4XQAdEIa+LjR2e35/MTXmwb6x1uQST9Xi8ew4j/pUwNneoR7+qF88cRQogf7uTw+ul0p0JbwsNb476IWVKZjo+f1Mx5glj/2mxH6ptDO9nRj+t8pi/qh343lh3YnS0M/CoBYGldB0tdT0aWnc68td/fH/nEzBkVzCwaIoGv9BMIgYTjsSDnYEHInjDmzU0tLS0tLSkqwu/wIrLQ+Sag3DGAAAAABJRU5ErkJggg=="
                />
              </div>
              <div>
                <img
                  alt="skills"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADe0lEQVR4nO1YS2gTYRBeq6JiqaigImoVPGilj51JHwragyKKiCCK9CKefICoB/F1EBRBBA9FtFr1rq0HoYgoNZk/fWXnb2pFKz6q9mBFERTUCj4b+VPTZje72Q0NbQ77wRyyO/P/82Xmn/lnNc2HDx8+fPjw4SMFra3FM0NRrAzJQDVFcVkspuWlammaJhhukMSGTKUlopdY1yIJh4TERjchxr22zmiaJqS+mSSGiPGvkBhLCEn8TBKuB42yUvOmjIPJil4lbOD6FAKMNz3aX7PaxmJannruZquIEWM99RTl5xQBIfF0Zj5Ad1uXPn+8CFw125XPE4w/MvWBDKzJDQISjtvqMfYKCT2C8VuK8xKfNjZun2hLgCSeFwYeSScUKV1sJRBifa2QsNskDLfcCAiJ9yx5PkiduC3x/u7LpVPUb+V0QifUiVucz0BEX65lCSThsM1BrDcRYHxl0YnYrRUnwniRGNpHNsgFAhI+WN43pVuzo6NqVm4RYHhuTmH4QkbFAm8bjAsBuGIiIPGOzTnpD3fino6OqmkZEyDGfaojOolq89kkQE5VaCgan1TEwqyv8UzAtYTKwKrREBASLifrtEZxETH+ct2b4UnIwE05RyDpHuWtgTHWxmLahJwioKBynhi/eyIh4cw4EsA6J/2wUbFE1XrBOJDeD/gT5PIVDp0YXhDjYydJudJmkUACqlAMpRX0pInCufHqA5cyWUOwvlIwtKUSwFDOEHgQqZxLVD3VcZ2eonxVUi1r9WWNgBpI7LonMR6zyd8LNnpNgoEMo6LA+c/ABsta/VkjIAzcKRiftbeXzDE9l1hnQ+CkWUffOhIdeBjs0gsdCITMkYTX9ofYwBpVadJJcxRnJBa+/6hkuvo34vaMvcT6hmgUJ7cYZUVqlk2tYvqOhK1hVBQM244czq+C8cDw2BiPEOyy8fV2VgYaYjzl1U7tFx8FPYySxPhz6KIH7211GI+OmkAzl8/22nz+b9pqrftCYl/GPjAOqFE0KxEQEk54tw1stOZ2sEsvtBlqXAQOJsKflZlYHURi/OiSPrXphhQx9N3INQWFxLNJG8NbYnyXqdhdb+MHUs3MErqFhN/Dm0p4Q524f/gClgbCgNXqcFoH+fiHLgZBMrBOGwsQVU8Ky8DCdHXdzV5EsZgMqFKdOJMZxIcPHz58+PChjRH+AUGRYamdqhc0AAAAAElFTkSuQmCC"
                />
              </div>
              <div>
                <img
                  alt="skills"
                  src="data:image/png;base64,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"
                />
              </div>
              <div>
                <img
                  alt="prisma"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADWElEQVR4nNWaW4hNURjHfzOMa0wYRPJiPJjw4BoRL9MYHtCYCE2ivIxQbilNGA+jeXJ/QbmXhOSWFOWSxohSFIbcZ3KbMnKZMUdL36nV6ezL2mvvc/b519c0Z6/v2/u397p869sbotUG4BPwDagF8shBLQISKbaCHFN/oDkNyGuggBzSoTQQSasiRzQD6HQBeQrkE3N1B564QCStgpir1uHCdwLbtP8fEGONBn47gIyQQf5K+20WMVQ+cNsB4rO2flRrv98lhqp2GQ+XUsbQe+3YdGKkIbJyO4HUpLRfrx27Qox01mOGKktp31vSluTxCcRAczwg1HoyII1fjdbmDFlWX+CtB8gzB99CoFWDVTNe1rTXx8J3zMW/Tmt3hCxpEtDhA2SVS4xBwA9pp2IVk2F1BR76gEgIsJt2a233k2Ft8QnxS9YNNw3TsgHVfmiGGBgJ/PQJcs9nzIOaTz0ZkEozrvuEULbLZ1yVh7WLTxtQFDEHyw0glC0xiH1S89saIcP/u6Svxn7MZBYqAf6KX6usM5HohCHElwAVk/Oa/8YoIMoMIZRdDnCecdoWWRUueoYJ0QtoCgAStJ9f02KorUFoqg8AoazconCREHsDdAsDYizwJwBEp+UUekuLtcwWogvQGPBpPLc8d3lKLHUtgbUuIISy49jrvhavMmiQ4cB3C5DVIYBUaPEeBS1+X7CAUDY5BJA84LEWc7ZpgPmWECqT7UE4WqrFvWPqfMASpIFw9z1NWuyZJs7zLEH2EK5WarHVYmmk0xYgqjuEqQJ5p5KMP8XEucjhJY0fUxuvsLVWi3/O1HluAIggGa/ffK/FpnR0yhDkKtFph3aew6bOqkL40QBkezQMFEqXskqBTLqYKp+GoTzZm2wGbqZJXAM/+aM+QQZaXLyaYBZLxdFtolHryqigJ+kHvPOAUCcwkcpop0p3bND264k09hLYJ0/cen9S6vGmVu3pvTRYMln1hL+6xGqXt1+bgPFEIL2QlmprHFKMaVKsbvS4Ec0CWBllBSWpwpRVNpEmOy2WwvVFKba53fUbUi0ZQxZU6nBn1Rh64TGOPsgXEQsycdfDzJA7pEvVSReL3ZdBfWQmSXfxLTKFLpQPa2KvEqm2t8lf9U5wYi58Y0Lc9Q9kS6Hd6ilkXwAAAABJRU5ErkJggg=="
                />
              </div>
            </div>
          </div>
          <p className="mt-5">Technologies </p>
          <div className="flex flex-row">
            <div className="flex flex-wrap">
              <div>
                <img
                  alt="skills"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVUlEQVR4nO2ZTWsUQRCGO4lehUCURFO1y+pBEPSQo6BXQUmqNsxBvEp+gAdzDOrVg4IYxIMifuRfBSGeIrJO9SZExJZ2JmFol52P3emZCVNQMAzbve8zXV01Na1Ua6211pprRqkZzbgpjN+s22t7TzVGPMErzWiSLgRvzZaaVU0Ur5sAYVLE1x4i7HeuCqNOA/gHwbhdmz1hNlbODggu2+uwv3yrURAmUHOa8Itm/DEkXIkg8KZmCDNBUIXhFImHTwlBzYEwt9UZTbgzQtC+rF+6bn+juXtD1uGahdIEz4Xwdy3Cydgnz/h5zFPdP+h3O+44IXha+Z4wUdh8TAuLwV2cd8ceBD2sdGObQM0JwYcscR3eW1pwx3+/c+VcZdnJbKlZYXyfRUC8MR+5c9hUW0mKNZH4d1nFxwC/7Avcifg4pLzXCaPUjJ0oj/ikH88jBF8P+9jzmmJN9Er8uqj4JEAsxh+EiZ78m0nEuwBRWMDu4VqnW3qd0Iybk4ofBXAMoRmX8tYJndhTqRZ3UaUARBC9C3nrhBDu1QZgVJ0Ig8XzUwMoM4Rif+j+55BwY+x8a/jYW/pMBSAYCC3ft72EdWF8oBl+TrUmTANizArEYQFH1ksraFn73KIA2kevUGQlhPGPZnxxAkDwMr6XZ47t6b0P5YQQhifuHMLwrBLxhSCCzqJybLgKFysTnxeiSJ7X3rqybBC587x47YvTIHzkeR8rUXqen9QmrRNSh++kRSFqIb4oRK3En5rP640/4DgVR0z/HfIR7lm3zUjlZwGttdaaqqX9BXBaAh7aBFdkAAAAAElFTkSuQmCC"
                />
              </div>
              <div>
                <img
                  alt="skills"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEK0lEQVR4nO1Za2gcVRReWyu1WFHQIiJKoUXwAYIoKAj+EPyj4B/xn/70Z3/2JdrEogYfaVV8Qn0hVgsW2UKgsdl0MU3SNk012Ww2bbJ57Gx35t69c+9sJskG9ZMzzSSTfWWS7mY2sgc+GIbZc7/v3nOWc84NhRrWsIbVxHQpd3FThplQ7ZxbD4U2immato2Z6hAXcpabCgQm5Dwz5VHO+e2hejYm1IvMVBMu8WJIjQv1KoCbQvVkumk+xk0ZdYkaQiGastGZsnFmysbpyRnowiNEqPNcyieD5h2SUt5JocGE/Nsl15+ZxqfDeTQNzqNtwnZAz0eH8+hJTy+KYEL+w035fdqy7l534gA2UShwIQ2X0FVm4bursw5ZF14BLo5dmUXCsDxClOBC7QGweV3I09EzoXpdAlrWQnjCxuHYEslKAghvx+ZxIjmDFF8SwoXqN4T1TM2IM2bfS0fOhPzXG+ct8evhUgrlBLh4byhfnB+mDAshHqgacQBb6Ii5qaxScV4JKwloWkBhfnBT2fRXnExi6w2R51I+x0w5VCnOS8EbIoshtsJvmkrkBxfqSlbKl9cuwEecF4IEjjIL7UNpPPv5BTz1cS9ODaSQ5BaOj61OPF9YvyoCTo7PoLmCgC9G5jCg59A9quOlby5h874z2LR3CSTmbCKDmJ7DVyNzFUUcH5utrgDa1TFmIW7k8GXB4h/F8+jSpvHXJMdrP/2JW/Z3LCPuxc37OhxxfUkDF6/lcKQgjz5LzGFQzzlr0ZpVE0DOKXwoITML/z60+O9TNobTWew5GcOtByJliRdi64GII3YwxR0f5It8ku82T75UVYCL1uG8s3v0/sKYgR3NUd/EC7GjOer4IF/kk3x716qJAK/z07G0Ezqv/HB51eSf/7rPCSXyUWmNmgqgRCXy8RTHb5dTeOSD7hWJ727pwi+XJjGSzuL1EwNOXgQmwCV12xsR7A3HMWkIvNM+gjve7Cwivn3hm6kS3/CgBXh39+e+pd3dsr+j6JQefv9c0e94vQgoFd9+8oTXmwDCtoMRfNsz4YCeK33L61EAgWKesNJ3vCGgjDVOIFyHIdTqKSWoTH76k/NrzoHHj/Tg1/6p9Skl3GKO2j+qPqmLcttBIvHoh+d8C3iwpQvHusehZ68XhuSLxi+ZbI2KOT/ltCGkQ2rnu3+UFXDf4ShaI6PIZOX6ltPaKhqaNDcdkvc0RxcF3HXoLN5qS0BjZjANjbaGlnJcN9GZyDig52BaSuk09TFvU//jaI2bera8qTeEeiFUjbEKM5VaNlZJVHescvFaDcYqAQ627q8a8SIhUj6xIUeLfoa7hflRdrjLAhzu+hqvJ0qP171xHuh43c8FR0fKXgZ659n13rq44ChzxTS+4a6Y/F7yMca2hzaKGUrt5qY8RaDnoPk0rGH/V/sP+55sPuvgE7oAAAAASUVORK5CYII="
                />
              </div>
              <div>
                <img
                  alt="skills"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAc0lEQVR4nO3XQQrEIBAEwP7//+Y92b0lhwnrCjEJVIGnoKRnFDQBAABmVbK9eeTuHygBsldh1Ko5Z0630CgBVnagmu+r5oysJUBHBw5soZo4kJ1XHeKOABnowMz4Ve3HX+Y6AuSPDlz9CMoTlQAAAPCtwAdxGMstWEoJIgAAAABJRU5ErkJggg=="
                />
              </div>
              <div>
                <img
                  alt="skills"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADhUlEQVR4nO2ZT4hVVRzHP5WTqOQiNy0UAsGFG8lVuJFU3GQrUchNtCjdxKihhqNpKqXhzHNMxMFm7i3BYEAo/EM66jhzjv9wIFGRFKU/lhsLXEiBf+Yr97zxed+8e59N99w374E/+O7u4vM5v/PO/M4ZeF4NWAqZr5C/FTCXRiyFtCtECrisDbxIo5UCepxAMe/SaKWAP2IC19VBE41S2sdEBQzGBKKt9AGNUgp4swy+mD/VzTgaoRTyfoJA1IXlZd+JF1TgpAp8Tz2VQr5MEbijr3ml9F0bi1VALq3Mpl5KIYcSBYoSLe6bbl5SG1dLAgVOUi+lkJupAiF3tZdXVWBpDP6ZXVC03SxbZbils7yeH3w34xTyqIqA1MU2tXGrQiClC4rgDTtlkYvhvfwEvuGNqvBRtvFQ2yvgE7ugaKtZOkvwRYEt+Ql0saQqfCfSSqTPUgRiXRiC/7YMvpju/AQCNlcV+BypGWk5qtYFXeFlWQ4kwEcd+Ck/gZADqfB7kVYMCUTZmCKwg1My/JAIb13uRb+LfAQCrqYKbIrBp3WhHelIKrhKOcdk//AdNCnkfiJ8xxBw87B8+j/gLdJp5vgX6GR66upvSICPd2En0o//Ed66LPMvELAwEX53yuo/SXQiHR0RvGRozUNgfaLAuirwa5AOjxDeuhzMQ2B/BfxXVeA/GfG2USzX/AuEXBw2uElrU+DXZoKXLA804PGWF13cFfBPmUAhBb4F6VgmeLn0M82fQMjUitVfkwC/HqnHA7x1R+nb/gS6eKdMYHsCfPSX94QneOuywp9AwOrYuCytyh1eMuz2JxASxMblcvjNSL2e4a0TOO5PIOB82bj8BH4L0qkc4K3L737goxtTdFWMj8tRvkDqyw1eMgzqKBOyC+xjcsW4vNUdc/nB25LEDF8v0U/H5dYawVsnsMiHQHNpXC4MtbYW8NalJbtAwB43Lu+qObxkCbML7OJndfBoFOAlw5nsAt/xW83BbUngr+wChnmyXBkFgevqZ0FmAScxQJMMzTLcrQH4PRk26ghjvcCXiZxnkgztsjzMYbsMuoeuXl7zDl4h0sdMWYxH+As6zazcwRMeZRfJ8GsG+NsyfCiN4n86NcB4t2ct/45gxe+7rXiOidRLqY8pKY+1w9OjfqZTryXLWzJcSjwWfV4T8yz1MkaWj2S4IcMvMnzs9ZXheVE/9RhWKOxUDYbwOwAAAABJRU5ErkJggg=="
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
