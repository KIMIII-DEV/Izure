# RAW

Hier kommt alles rein. Ohne Ordnung, ohne Vollständigkeit, ohne vorher zu
überlegen, wo es hingehört. Das ist der ganze Sinn des Ordners: der Moment
des Notierens soll keine Entscheidung verlangen.

Eine Notiz in RAW zählt voll — sie steht im Graphen, ist durchsuchbar und
darf Verweise haben. Sie ist nur noch nicht einsortiert.

Das Minimum ist eine `id`:

```markdown
---
id: irgendeine-idee
---

Text.
```

Alles andere (`type`, `provenance`, `confidence`, `tags`, `related`) kann
später dazu — beim Einsortieren, von Hand oder von Punchy.

## Einsortieren

```bash
git mv graph/RAW/irgendeine-idee.md graph/SORT/ideen/irgendeine-idee.md
npm run graph
```

Der Pfad in der Ansicht wird ohne den Stammordner gebildet, Verweise auf
die `id` brechen also nicht. Neue Unterordner in `SORT/` darf man einfach
anlegen.

Diese README wird beim Bauen übersprungen — sie ist keine Notiz.
