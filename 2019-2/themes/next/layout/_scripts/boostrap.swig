{%
  set boot_scripts = [
    'src/bootstrap.js'
  ]
%}

{% for bs in boot_scripts %}
  <script src="{{ url_for(theme.js) }}/{{ bs }}?v={{ version }}"></script>
{% endfor %}
